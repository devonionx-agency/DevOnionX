import ServiceCard from "./ServiceCard";

/**
 * Renders services in a hybrid bento grid layout:
 * Row pattern: [half, half] → [half, half] → [third, third, third] → [half, half] → [full]
 * Layout is driven by service.layout field: "half" | "third" | "full"
 */

const ServiceBentoGrid = ({ services }) => {
  // Separate by layout type preserving original order
  const rows = buildRows(services);

  return (
    <div className="flex flex-col gap-3">
      {rows.map((row, rowIndex) => {
        const layout = row[0]?.layout;

        if (layout === "full") {
          return (
            <div key={rowIndex}>
              <ServiceCard service={row[0]} />
            </div>
          );
        }

        if (layout === "third") {
          return (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {row.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          );
        }

        // default: "half"
        return (
          <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {row.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

/**
 * Groups flat services array into rows based on layout field.
 * Consecutive same-layout items are grouped:
 *   - "half"  → chunks of 2
 *   - "third" → chunks of 3
 *   - "full"  → always alone
 */
function buildRows(services) {
  const rows = [];
  let i = 0;

  while (i < services.length) {
    const current = services[i];

    if (current.layout === "full") {
      rows.push([current]);
      i++;
      continue;
    }

    if (current.layout === "third") {
      const chunk = [];
      while (
        i < services.length &&
        services[i].layout === "third" &&
        chunk.length < 3
      ) {
        chunk.push(services[i]);
        i++;
      }
      rows.push(chunk);
      continue;
    }

    // "half" — chunk of 2
    if (current.layout === "half") {
      const chunk = [];
      while (
        i < services.length &&
        services[i].layout === "half" &&
        chunk.length < 2
      ) {
        chunk.push(services[i]);
        i++;
      }
      rows.push(chunk);
      continue;
    }

    i++;
  }

  return rows;
}

export default ServiceBentoGrid;
