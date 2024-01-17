"use client";
const SectionHead = ({ title }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[18px]">{title}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="5"
        viewBox="0 0 25 5"
        fill="none"
      >
        <circle cx="2.5" cy="2.5" r="2.5" fill="#D8D8D8" />
        <circle cx="12.5" cy="2.5" r="2.5" fill="#D8D8D8" />
        <circle cx="22.5" cy="2.5" r="2.5" fill="#D8D8D8" />
      </svg>
    </div>
  );
};

export default SectionHead;
