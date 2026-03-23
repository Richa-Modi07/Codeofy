function Button({ content, onClick, rounded = "lg", variant = "blue", icon }) {
  const variants = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200",
    black:
      "border border-gray-200 hover:border-gray-300 text-black bg-white hover:bg-gray-100",
    outline:
      "border bg-white/40 border-white/20 hover:border-white/50 text-white hover:bg-white/20",
  };
  const Rounded = {
    lg: "rounded-lg",
    full: "rounded-full",
  };
  const basicStyle =
    "cursor-pointer w-fit py-2 px-8 inline-flex items-center justify-center gap-2 font-semibold";
  return (
    <div>
      <button
        onClick={onClick}
        className={` ${basicStyle} ${variants[variant]} ${Rounded[rounded]}`}
      >
        {content}
        <span>{icon}</span>
      </button>
    </div>
  );
}

export default Button;
