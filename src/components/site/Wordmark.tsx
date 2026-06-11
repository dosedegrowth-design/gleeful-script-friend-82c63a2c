import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex items-center group">
      <div className="h-10 group-hover:scale-105 transition-transform duration-500">
        <img 
          src="/mooviagold.svg" 
          alt="MOOVIA Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
    </Link>
  );
}