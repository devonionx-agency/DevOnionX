"use client";

import DirectionalButton from "@/components/common/Directionalbutton";

const ServiceFilterBar = ({ categories, active, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((cat) => (
        <DirectionalButton
          key={cat.id}
          label={cat.label}
          borderColor={active === cat.value ? "#ff5101" : "#fff"}
          textColor="white"
          borderHoverColor="#ff5101"
          onClick={() => onSelect(cat.value)}
        />
      ))}
    </div>
  );
};

export default ServiceFilterBar;
