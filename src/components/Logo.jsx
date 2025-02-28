import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Logo = ({ showIcon = true }) => {
  return (
    <Link to="/" className="flex items-center gap-2 no-underline">
      {showIcon && <GraduationCap size={32} className="text-[var(--teal)]" />}
      <div className="font-bold text-xl tracking-tight">
        <span className="text-[var(--teal)]">Tutor</span>
        <span
          className="relative"
          style={{
            background: "var(--gradient-accent)",
            backgroundImage:
              "linear-gradient(to right, var(--lilac) 0%, var(--teal) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Finder
        </span>
      </div>
    </Link>
  );
};
export default Logo;
