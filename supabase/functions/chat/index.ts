import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { messages, session_id } = await req.json()

    const systemPrompt = `Você é o assistente da MOOVIA Portugal, consultoria boutique de coordenação de transições internacionais com foco no corredor Brasil para Portugal.

IDENTIDADE:
Nome: MOOVIA Portugal (mooviaportugal.com)
Tagline: Planejar. Chegar. Ficar.
Posicionamento: O mercado resolve tarefas. A MOOVIA resolve a decisão.
Tom: confiante, quente, premium, conciso — máximo 3 a 4 frases por resposta

FUNIL:
Lead → Conversa Gratuita (grátis, Calendly) → Assessment €250 (90 min, entregável físico) → Mandato (€3.000 a €10.000)

4 PILARES:
1. Planejamos: Assessment, diagnósticos, estratégia migratória, mapa de decisão
2. Instalamos: Habitação, documentação (NIF, NISS, conta), concierge, traduções
3. Integramos: Educação, school matching, adaptação 30/60/90 dias, pet relocation
4. Estruturamos: Fiscalidade, empresas, estruturação patrimonial

EQUIPA:
Frederico Prado: Founder, 29 anos TI, Oracle/SAP, Lisboa desde 2018
Sara Russo: Imobiliária Remax Collection (housing acima €1.500/mês)
Laura: Advogada de imigração
Pablo: Especialista em ativos digitais

REGRAS:
NUNCA: relocação, imigração, pacote, plano, solução, consulta grátis
SEMPRE: transição internacional, coordenação, mandato, jornada, diagnóstico
Responder em português do Brasil
Terminar com CTA para form ou Calendly
Corredor ativo: Brasil para Portugal`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20240620',
        max_tokens: 1000,
        system: systemPrompt,
        messages: messages,
      }),
    })

    const data = await response.json()
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
