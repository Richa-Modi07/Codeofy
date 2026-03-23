import SectionHeader from "@/components/ui/SectionHeader";

export default function FeatureGrid({
  label,
  title,
  subtitle,
  items,
  columns = 4,
  dark = false,
  renderCard,
  className = "",
  headerAlign = "center",
}) {
  const colsClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  const defaultCard = (item, index) => (
    <div
      key={item.title || index}
      className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
        dark
          ? "bg-white/5 border-white/10 hover:border-blue-500/40"
          : "border-gray-100 hover:border-blue-200 bg-white"
      }`}
    >
      {item.icon && (
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors text-xl ${
            dark
              ? "bg-blue-500/20 group-hover:bg-blue-500/30 text-blue-400"
              : "bg-blue-50 group-hover:bg-blue-100 text-blue-500"
          }`}
        >
          {item.icon}
        </div>
      )}
      <h3
        className={`font-bold mb-2 text-sm ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {item.title}
      </h3>
      <p
        className={`text-xs leading-relaxed flex-1 ${
          dark ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {item.desc}
      </p>
      {/* Optional tags */}
      {item.tags && (
        <div className="flex flex-col gap-1.5 pt-3 mt-3 border-t border-gray-50">
          {item.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-blue-300 flex items-center justify-center flex-shrink-0">
                <div className="w-1 h-1 rounded-full bg-blue-400" />
              </div>
              <span className="text-gray-500 text-[11px]">{tag}</span>
            </div>
          ))}
        </div>
      )}
      {/* Extra slot */}
      {item.extra}
    </div>
  );

  return (
    <section
      className={`py-20 px-4 ${dark ? "bg-gray-900" : "bg-white"} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || label) && (
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
            dark={dark}
            align={headerAlign}
          />
        )}
        <div className={`grid ${colsClass[columns] || colsClass[4]} gap-6`}>
          {items.map((item, i) =>
            renderCard ? renderCard(item, i) : defaultCard(item, i),
          )}
        </div>
      </div>
    </section>
  );
}
