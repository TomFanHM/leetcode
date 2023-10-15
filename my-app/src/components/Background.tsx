import React from "react";

const Background: React.FC = () => {
  return (
    <div
      className="absolute inset-0 transform-gpu overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            "polygon(71.5% 41.5%, 95% 58.6%, 92.5% 23.9%, 82.5% 1.4%, 78.7% 4.3%, 70.5% 29%, 58.2% 59%, 50.4% 64.7%, 45.5% 54.9%, 43.2% 31.1%, 25.5% 73.3%, 0.1% 61.5%, 14.9% 97%, 24.6% 73.8%, 71.1% 94.7%, 69.1% 41.1%)",
        }}
      />
    </div>
  );
};
export default Background;
