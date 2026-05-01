import React, { useRef, useState, useEffect } from "react";

const DescriptionCell = ({ description }) => {
  const textRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const element = textRef.current;

    if (element) {
      setShowTooltip(element.scrollWidth > element.clientWidth);
    }
  }, [description]);

  return (
    <td className="py-4 max-w-[240px]">
      <div className="group relative w-full">
        <p
          ref={textRef}
          className="truncate whitespace-nowrap overflow-hidden cursor-pointer"
        >
          {description}
        </p>

        {showTooltip && (
          <div className="absolute left-[272px] bottom-3 !z-[1000] hidden w-80 rounded-lg bg-secondary-500 px-2 py-2 text-sm text-white shadow-lg group-hover:block">
            {description}
          </div>
        )}
      </div>
    </td>
  );
};

export default DescriptionCell;
