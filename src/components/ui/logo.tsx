import { Link } from "react-router";

export const Logo = () => {
  return (
    <Link to="/" className="inline-flex items-center gap-1 group">
      <svg
        width="140"
        height="40"
        viewBox="0 0 220 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain transition-all"
      >
        <path
          d="M10 50V10H22L34 32L46 10H58V50H46V26L34 46L22 26V50H10Z"
          fill="var(--text-h)"
        />
        <path
          d="M95 10C78.4315 10 65 23.4315 65 40C65 56.5685 78.4315 70 95 70C103.284 70 110.8 66.6421 116.213 61.2132L102.071 47.0711C99.2536 49.8886 95.3431 51.6 91 51.6C82.3848 51.6 75.4 44.6152 75.4 36C75.4 27.3848 82.3848 20.4 91 20.4C99.6152 20.4 106.6 27.3848 106.6 36H125C125 19.4315 111.569 6 95 6Z"
          transform="matrix(0.8 0 0 0.8 15 2)"
          fill="var(--text-h)"
        />
        <path
          d="M98 34L108 24L118 34L112 44H92L98 34Z"
          fill="#F97316"
        />
        <text
          x="122"
          y="42"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="30"
          fontWeight="500"
          fill="var(--text-h)"
          textAnchor="start"
          direction="ltr"
        >
          store
        </text>
      </svg>
    </Link>
  );
};

export default Logo;