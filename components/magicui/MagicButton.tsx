import Link from "next/link";
import React from "react";

function MagicButton({
  tittle,
  icon,
  position,
  href,
  handleClick,
  otherClasses,
}: {
  tittle: string;
  href?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return href ? (
    <Link href={href}>
      <button
        className={`relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none  ${otherClasses}`}
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm whitespace-nowrap font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          {tittle}
          {position === "right" && icon}
        </span>
      </button>
    </Link>
  ) : (
    <button
      className="relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm whitespace-nowrap font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {tittle}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default MagicButton;
