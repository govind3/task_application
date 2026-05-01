import React, { useRef, useState, useEffect } from "react";

const TitleCell = ({ title }) => {
  const titleRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const element = titleRef.current;

    if (element) {
      setShowTooltip(element.scrollWidth > element.clientWidth);
    }
  }, [title]);

  return (
    <td className="py-4 max-w-[180px]">
      <div className="group relative w-full">
        <p
          ref={titleRef}
          className="truncate whitespace-nowrap overflow-hidden cursor-pointer"
        >
          {title}
        </p>

        {showTooltip && (
          <div className="absolute left-[192px] bottom-3 !z-[1000] hidden w-80 rounded-lg bg-secondary-500 px-2 py-2 text-sm text-white shadow-lg group-hover:block">
            {title}
          </div>
        )}
      </div>
    </td>
  );
};

export default TitleCell;
