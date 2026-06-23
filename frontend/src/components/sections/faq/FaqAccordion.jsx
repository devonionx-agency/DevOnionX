"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";
import { faqItems } from "@/helper/faqData";


export default function FaqAccordion() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={activeFaq === index}
          onToggle={() => setActiveFaq(activeFaq === index ? null : index)}
        />
      ))}
    </div>
  );
}
