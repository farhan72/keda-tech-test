import { useState } from "react";
import { PricingCard, Title } from "../ui";
import styles from "./Pricing.module.scss";
import PricingToggle from "./PricingToggle";
import { IPricingPlan } from "./PricingCard/types";

const plans: IPricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Start managing your inventory",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { name: "Record Incoming Goods", included: true },
      { name: "Record Outgoing Goods", included: true },
      { name: "Weekly Profit Reports", included: false },
      { name: "Multi User", included: false },
      { name: "Export to Excel/PDF", included: false },
    ],
    buttonText: "Start for Free",
    buttonVariant: "outline",
  },
  {
    id: "business",
    name: "Business",
    description: "For growing businesses",
    monthlyPrice: 3.33,
    annualPrice: 33.33,
    features: [
      { name: "Record Incoming Goods", included: true },
      { name: "Record Outgoing Goods", included: true },
      { name: "Weekly Profit Reports", included: true },
      { name: "Multi User", included: false },
      { name: "Export to Excel/PDF", included: false },
    ],
    buttonText: "Upgrade to Business",
    buttonVariant: "primary",
    popular: true,
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    description: "Complete solution for your business",
    monthlyPrice: 10,
    annualPrice: 100,
    features: [
      { name: "Record Incoming Goods", included: true },
      { name: "Record Outgoing Goods", included: true },
      { name: "Weekly Profit Reports", included: true },
      { name: "Multi User", included: true },
      { name: "Export to Excel/PDF", included: true },
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
];

const Index = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const toggleBillingCycle = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section className={`container ${styles["pricing"]}`} id="pricing">
      <div className={styles["header"]}>
        <Title name="Choose a package according to your needs" />
        <p>
          Manage your business inventory with ease. All plans include a 14-day
          free trial.
        </p>
      </div>
      <div className={styles["content"]}>
        <PricingToggle isAnnual={isAnnual} onToggle={toggleBillingCycle} />

        <div
          className={`${styles["plans-wrapper"]} grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto`}
        >
          {plans.map((plan) => (
            <div key={plan.id} className={`${plan.popular ? "md:-my-6" : ""}`}>
              <PricingCard plan={plan} isAnnual={isAnnual} />
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">
            All plans include basic features, such as automatic data backup and technical support.
          </p>
          <p className="text-gray-700 font-medium">
          Looking for a custom package?{" "}
            <span className="text-blue-600 cursor-pointer underline hover:text-blue-800">
              Contact us
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
