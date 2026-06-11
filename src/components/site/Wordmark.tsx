import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col group gap-0.5">
      <div className="h-16 group-hover:scale-105 transition-transform duration-500">
        <img 
          src="/moovia-logo-full.png" 
          alt="MOOVIA Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
}