export default function WaveDivider({ fromColor = "from-[#07031c]", toColor = "to-white", flip = false }) {
  return (
    <div className={`absolute ${flip ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden`}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        className={`relative block w-full h-[60px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z"
          className={`fill-current ${fromColor} ${toColor}`}
        />
      </svg>
    </div>
  )
}

