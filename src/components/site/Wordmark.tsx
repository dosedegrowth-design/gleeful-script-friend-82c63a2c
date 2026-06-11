import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col gap-0.5">
      <div className="h-24">
        <img 
          src="/moovia-logo-full.png" 
          alt="MOOVIA Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
}