import type { APIRoute } from "astro";
import config from "@/config";

export const prerender = false;

export interface AvailabilityStatus {
  status: "available" | "limited" | "away";
  message: string;
  color: "green" | "yellow" | "orange" | "red";
  responseTime: string;
}

function getAvailabilityStatus(time: Date): AvailabilityStatus {
  const hour = time.getHours();
  const day = time.getDay();

  if (day === 0 || day === 6) {
    return {
      status: "limited",
      message: "Weekend - Limited availability",
      color: "orange",
      responseTime: "Expect a response within 1-2 days",
    };
  }

  if (hour >= 9 && hour < 18) {
    return {
      status: "available",
      message: "Available - Working hours",
      color: "green",
      responseTime: "Usually respond within a few hours",
    };
  }

  if (hour >= 18 && hour < 22) {
    return {
      status: "limited",
      message: "Evening - May be available",
      color: "yellow",
      responseTime: "May respond today or tomorrow morning",
    };
  }

  return {
    status: "away",
    message: "Away - Sleeping or personal time",
    color: "red",
    responseTime: "Will respond during next working day",
  };
}

export const GET: APIRoute = () => {
  try {
    const now = new Date();
    const myTime = new Date(
      now.toLocaleString("en-US", { timeZone: config.timezone }),
    );

    const availability = getAvailabilityStatus(myTime);

    return new Response(JSON.stringify(availability), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error generating availability status", error);

    const errorAvailability: AvailabilityStatus = {
      status: "away",
      message: "Unable to determine availability",
      color: "red",
      responseTime: "Please try again later",
    };

    return new Response(JSON.stringify(errorAvailability), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
