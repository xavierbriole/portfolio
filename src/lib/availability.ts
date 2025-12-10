import type { AvailabilityStatus } from "@/pages/api/availability.json";

export function initAvailability(): void {
  const colorMap: Record<
    AvailabilityStatus["color"],
    { bg: string; text: string }
  > = {
    green: { bg: "bg-green-500", text: "text-green-500" },
    yellow: { bg: "bg-yellow-500", text: "text-yellow-500" },
    orange: { bg: "bg-orange-500", text: "text-orange-500" },
    red: { bg: "bg-red-500", text: "text-red-500" },
  };

  function getColorClass(
    color: AvailabilityStatus["color"],
    prefix: "bg" | "text",
  ): string {
    return colorMap[color][prefix];
  }

  async function updateAvailability(): Promise<void> {
    const myTimezoneElement = document.getElementById("my-timezone");

    if (!myTimezoneElement || !myTimezoneElement.textContent) {
      return;
    }

    const timezone = myTimezoneElement.textContent.trim() || "UTC";

    try {
      updateTimeDisplays(timezone);

      const response = await fetch("/api/availability.json");
      const data: AvailabilityStatus = await response.json();

      updateAvailabilityUI(data);
      updateResponseExpectation(data);
    } catch (error) {
      console.error("Error fetching availability data", error);

      const statusElement = document.getElementById("availability-status");

      if (!statusElement) {
        return;
      }

      statusElement.textContent = "An error occurred. Please try again later.";
    }
  }

  function updateTimeDisplays(myTimezone: string): void {
    const localTimeElement = document.getElementById("local-time");
    const yourTimezoneElement = document.getElementById("your-timezone");
    const timeDifferenceElement = document.getElementById("time-difference");

    const now = new Date();
    const yourTimezone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";

    if (!localTimeElement) {
      return;
    }

    const myTime = new Date(
      now.toLocaleString("en-US", { timeZone: myTimezone }),
    );
    const timeString = myTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    localTimeElement.textContent = timeString;

    if (!yourTimezoneElement) {
      return;
    }

    yourTimezoneElement.textContent = yourTimezone;

    if (!timeDifferenceElement) {
      return;
    }

    try {
      const myTimeOffset = new Date(
        now.toLocaleString("en-US", { timeZone: myTimezone }),
      );
      const yourTimeOffset = new Date(
        now.toLocaleString("en-US", { timeZone: yourTimezone }),
      );

      const timeDiff =
        Math.abs(myTimeOffset.getTime() - yourTimeOffset.getTime()) /
        (1000 * 60 * 60);
      const diffHours = Math.round(timeDiff);

      let diffText;
      if (diffHours === 0) {
        diffText = "Same timezone!";
      } else {
        const direction =
          myTimeOffset.getTime() > yourTimeOffset.getTime()
            ? "ahead"
            : "behind";
        diffText = `${diffHours}h ${direction}`;
      }

      timeDifferenceElement.textContent = diffText;
    } catch (error) {
      timeDifferenceElement.textContent = "Unable to calculate";
    }
  }

  function updateAvailabilityUI(availability: AvailabilityStatus): void {
    const statusElement = document.getElementById("availability-status");
    const indicatorElement = document.getElementById("status-indicator");
    const pulseElement = document.getElementById("status-pulse");

    if (!statusElement) {
      return;
    }

    statusElement.textContent = availability.message;

    if (!indicatorElement || !pulseElement) {
      return;
    }

    const colorClasses = Object.values(colorMap).map((c) => c.bg);
    indicatorElement.classList.remove(...colorClasses);
    pulseElement.classList.remove(...colorClasses);

    const colorClass = getColorClass(availability.color, "bg");

    indicatorElement.classList.add(colorClass);
    pulseElement.classList.add(colorClass);

    if (availability.status === "available") {
      pulseElement.style.display = "block";
    } else {
      pulseElement.style.display = "none";
    }
  }

  function updateResponseExpectation(availability: AvailabilityStatus): void {
    const responseElement = document.getElementById("response-expectation");

    if (!responseElement) {
      return;
    }

    const colorClass = getColorClass(availability.color, "text");

    responseElement.textContent = "";

    const span = document.createElement("span");
    span.className = "flex items-center justify-center";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", `w-3 h-3 mr-1 ${colorClass}`);
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewBox", "0 0 20 20");

    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle",
    );
    circle.setAttribute("cx", "10");
    circle.setAttribute("cy", "10");
    circle.setAttribute("r", "8");
    svg.appendChild(circle);

    span.appendChild(svg);

    const textNode = document.createTextNode(availability.responseTime);
    span.appendChild(textNode);

    responseElement.appendChild(span);
  }

  updateAvailability();

  setInterval(updateAvailability, 60000);
}
