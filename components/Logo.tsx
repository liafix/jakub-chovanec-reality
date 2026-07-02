import Link from "next/link";

type LogoVariant = "header" | "footer" | "card";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
};

const logoSizes: Record<LogoVariant, string> = {
  header: "h-12 w-12 sm:h-14 sm:w-14",
  footer: "h-20 w-20",
  card: "h-16 w-16 sm:h-20 sm:w-20"
};

const logoMark = (variant: LogoVariant, className = "") => (
  <span
    className={`grid shrink-0 place-items-center rounded-full border border-white/18 bg-[#f7f1e8] font-serif font-semibold text-[#0b1118] shadow-[0_16px_42px_rgba(0,0,0,0.22)] ${logoSizes[variant]} ${className}`}
    aria-hidden="true"
  >
    JC
  </span>
);

export function Logo({ variant = "header", className = "" }: LogoProps) {
  if (variant === "header") {
    return (
      <Link href="/" aria-label="Jakub Chovanec Reality domov" className="inline-flex items-center">
        {logoMark(variant, className)}
      </Link>
    );
  }

  return logoMark(variant, className);
}
