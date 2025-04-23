import { Check } from "lucide-react";
import { IPricingCardProps } from "./types";

const Index: React.FC<IPricingCardProps> = ({ isAnnual, plan }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  const formatPrice = (amount: number): string => {
    if (amount === 0) return "Free";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div
      className={`flex flex-col h-full sm:w-full p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl ${
        plan.popular
          ? "border-2 border-blue-500 relative scale-105 bg-white z-5"
          : "border border-gray-200 bg-white"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
        <p className="text-gray-500 text-sm">{plan.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {price > 0 && (
            <span className="text-gray-500">
              /{isAnnual ? "year" : "month"}
            </span>
          )}
        </div>
        {isAnnual && price > 0 && (
          <p className="text-green-600 text-sm mt-1">
            Save {formatPrice(plan.monthlyPrice * 12 - plan.annualPrice)} per
            year
          </p>
        )}
      </div>

      <ul className="mb-8 space-y-3 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div
              className={`flex-shrink-0 mr-2 mt-0.5 ${
                feature.included ? "text-blue-500" : "text-gray-300"
              }`}
            >
              <Check
                size={18}
                className={feature.included ? "opacity-100" : "opacity-50"}
              />
            </div>
            <span
              className={feature.included ? "text-gray-700" : "text-gray-400"}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-auto py-3 px-4 rounded-lg font-medium transition-all duration-150 ${
          plan.buttonVariant === "outline" || !plan.popular
            ? "bg-white text-blue-600 border border-blue-500 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default Index;
