import React from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  date: string;
};

const Badge: React.FC<BadgeProps> = ({ date }) => {
  const sevenDays = 604800000; // 7 * 24 * 60 * 60 * 1000
  const currentTime = new Date();
  const timeDiff = currentTime.getTime() - new Date(date).getTime();
  const breaking = timeDiff <= sevenDays;
  return (
    <div
      className={twMerge(
        "badge",
        breaking ? "badge-primary" : "badge-secondary"
      )}
    >
      {breaking ? "NEW" : "ARCHIVED"}
    </div>
  );
};

export default Badge;
