interface IPricingToggleProps {
  isAnnual: boolean;
  onToggle: () => void;
}

const PricingToggle: React.FC<IPricingToggleProps> = ({isAnnual, onToggle}) => (
    <div className="flex items-center justify-center gap-3">
        <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
          Monthly
        </span>
        <button
          onClick={onToggle}
          className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{ backgroundColor: isAnnual ? '#3B82F6' : '#E5E7EB' }}>
          <span
            className={`${
              isAnnual ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </button>
        <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
          Yearly
        </span>
        <span className="ml-1.5 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
          Save 20%
        </span>
      </div>
);

export default PricingToggle;
