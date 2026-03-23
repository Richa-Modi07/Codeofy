// // import ServiceHero from "@/assets/ServiceHero.png";
// import Button from "../ui/Button";
// import Badge from "../ui/Badge";
// function HeroSection({
//   badge,
//   breadcrumb,
//   beforeHeading,
//   afterHeading,
//   highlight,
//   desc,
//   primaryBtn,
//   secondaryBtn,
//   image,
// }) {
//   return (
//     <section className="py-16 md:py-32 bg-gray-100 px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-12 mx-auto">
//       {/* Left Content */}
//       <div className="flex-1 flex flex-col gap-4 md:gap-8 max-w-xl lg:max-w-none">
//         <Badge />
//         {/* Heading */}
//         <h1 className="text-slate-900 font-bold text-4xl lg:text-6xl">
//           {beforeHeading} <span className="text-blue-600">{highlight} </span>
//           {afterHeading}
//         </h1>

//         {/* Description */}
//         <p className="text-lg text-slate-600">{desc}</p>

//         {/* CTA Buttons */}
//         <div className="flex flex-row gap-4 ">
//           <Button content={primaryBtn.content} onClick={primaryBtn.onClick} />
//           <Button
//             content={secondaryBtn.content}
//             onClick={secondaryBtn.onClick}
//           />
//         </div>
//       </div>

//       {/* Right Image */}
//       {image && (
//         <div className="flex-1 w-full max-w-xl lg:max-w-none">
//           {/* Image Container */}
//           <div className="p-4 bg-white/20 border border-slate-200 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className=" rounded-xl w-full object-cover aspect-video"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default HeroSection;

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroSection({
  badge,
  badgeVariant = "light",
  breadcrumb,
  heading,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  visual,
  bgClassName = "bg-gray-50",
  dark = false,
  centered = false,
  floatingBadge,
}) {
  return (
    <section className={`py-16 sm:py-20 px-4 overflow-hidden ${bgClassName}`}>
      <div
        className={`max-w-7xl mx-auto ${
          centered
            ? "text-center"
            : "grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        }`}
      >
        {/* Content */}
        <div className={centered ? "max-w-4xl mx-auto" : ""}>
          {breadcrumb && (
            <p className="text-xs text-gray-400 mb-5">{breadcrumb}</p>
          )}
          {badge && (
            <div className="mb-6">
              <Badge variant={badgeVariant}>{badge}</Badge>
            </div>
          )}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] mb-4 sm:mb-5 ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {heading}{" "}
            {highlightedText && (
              <span className="text-blue-500">{highlightedText}</span>
            )}
          </h1>
          <p
            className={`text-base leading-relaxed mb-8 ${
              centered ? "max-w-xl mx-auto" : "max-w-md"
            } ${dark ? "text-gray-400" : "text-gray-500"}`}
          >
            {description}
          </p>
          <div
            className={`flex flex-col sm:flex-row flex-wrap gap-4 ${
              centered ? "justify-center" : ""
            }`}
          >
            {primaryCTA && (
              <Button
                variant={dark ? "primary" : "primary"}
                size="md"
                onClick={primaryCTA.onClick}
              >
                {primaryCTA.label}
                {primaryCTA.icon && <span>{primaryCTA.icon}</span>}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                variant={dark ? "outline" : "secondary"}
                size="md"
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.icon && <span>{secondaryCTA.icon}</span>}
                {secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>

        {/* Visual */}
        {visual && (
          <div className={`relative ${centered ? "mt-12" : ""}`}>
            {visual}
            {floatingBadge && (
              <div className="absolute -bottom-4 left-6 sm:left-12 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 text-lg">
                  {floatingBadge.icon}
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">
                    {floatingBadge.title}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {floatingBadge.subtitle}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
