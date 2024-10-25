import React from "react";

const SpinTheWheelIframe = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <iframe
        src="https://spinthewheel.app/YZMWM0Htwz"
        title="Spin The Wheel"
        className="w-full h-screen max-w-xl border-0 shadow-lg rounded-lg"
        style={{ minHeight: "600px" }} // Minimum height for better display
        loading="lazy" // Lazy loading for performance
      />
    </div>
  );
};

export default SpinTheWheelIframe;
