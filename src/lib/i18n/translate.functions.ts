import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  texts: z.array(z.string().min(1).max(2000)).min(1).max(80),
  target: z.enum(["pt-BR", "es", "en"]),
});

const LOCALE_NAMES: Record<string, string> = {
  "pt-BR": "Brazilian Portuguese (pt-BR)",
  es: "European Spanish (es-ES)",
  en: "British English (en-GB)",
};

// Public serverFn — translates short UI strings from PT-PT into the target
// locale using the Lovable AI Gateway. The client caches results so each
// string is fetched at most once per locale.
export const translateBatch = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => InputSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) throw new Error("LOVABLE_API_KEY missing");

    const targetName = LOCALE_NAMES[data.target];
    const system = `You are a senior native translator. Translate each item from European Portuguese (pt-PT) into ${targetName}.
Rules:
- Preserve meaning, tone, and brand voice (calm, premium, editorial).
- Keep proper nouns (MOOVIA, Lisboa, Cascais, Estoril, Portugal, Brasil) untouched unless they have a standard local form.
- Keep punctuation, capitalization style and any leading/trailing whitespace.
- Do NOT add explanations.
- Return STRICT JSON: {"t":["translation1","translation2",...]} in the same order as input.`;

    const user = JSON.stringify({ items: data.texts });

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`AI gateway ${res.status}: ${txt.slice(0, 200)}`);
    }
    const json = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const content = json.choices?.[0]?.message?.content ?? "{}";
    let parsed: { t?: unknown };
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = {};
    }
    const t = Array.isArray(parsed.t) ? (parsed.t as unknown[]) : [];
    const translations = data.texts.map((src, i) => {
      const v = t[i];
      return typeof v === "string" && v.trim() ? v : src;
    });
    return { translations };
  });
