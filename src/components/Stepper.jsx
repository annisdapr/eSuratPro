import React from "react";
import { Check } from "lucide-react";

const Stepper = ({ currentStep, steps }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${currentStep > index + 1 ? "bg-blue-600 text-white" : ""}
                  ${
                    currentStep === index + 1
                      ? "bg-blue-600 text-white scale-110"
                      : ""
                  }
                  ${currentStep < index + 1 ? "bg-gray-200 text-gray-500" : ""}
                `}
              >
                {currentStep > index + 1 ? <Check size={18} /> : index + 1}
              </div>
              <p
                className={`mt-2 text-xs text-center ${
                  currentStep >= index + 1
                    ? "font-semibold text-gray-700"
                    : "text-gray-500"
                }`}
              >
                {step}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 transition-all
                  ${currentStep > index + 1 ? "bg-blue-600" : "bg-gray-200"}
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
