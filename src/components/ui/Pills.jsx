export default function Badge({ children, variant = "light", className = "" }) {
  const variants = {
    light: "bg-blue-100 text-blue-600 border border-blue-200",
    dark: "border border-blue-500/40 bg-blue-500/10 text-blue-400",
    pill: "bg-gray-100 text-gray-600 border border-gray-200",
    dotted: "bg-blue-50 border border-blue-100 text-blue-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full ${variants[variant]} ${className}`}
    >
      {variant === "dotted" && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
      )}
      {children}
    </span>
  );
}
