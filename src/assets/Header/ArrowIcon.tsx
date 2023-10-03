type ArrowIconType = {
  isDark?: boolean;
};

export const ArrowIcon = ({ isDark = true }: ArrowIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M7 13.439L12 18.439L17 13.439"
        stroke={isDark ? "#262626" : "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
