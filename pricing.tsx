import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pricingPlans = [
  {
    name: "Weekly Key",
    price: "$8",
    period: "/week",
    features: [
      { name: "Brainrot Finder Premium", included: false },
      { name: "Script Access for 1 Week", included: true },
      { name: "Standard Support", included: true }
    ],
    buttonText: "Purchase",
    popular: false
  },
  {
    name: "Logs Channel",
    price: "$17",
    period: "/month",
    features: [
      { name: "Brainrot Finder Premium", included: true },
      { name: "1 Month Full Access", included: true },
      { name: "Priority Discord Support", included: true }
    ],
    buttonText: "Purchase",
    popular: true
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePurchase = (planName: string) => {
    console.log(`Purchase ${planName} clicked`);
  };

  return (
    <section id="pricing" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="pricing-heading">
            <span className="bg-gradient-to-r from-ugly-green-400 to-ugly-green-600 bg-clip-text text-transparent">
              Join Ugly's Premium Today
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the perfect plan for your script execution needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-slate-800/50 border rounded-2xl p-8 hover:border-ugly-green-500/50 transition-all duration-300 group overflow-hidden ${
                plan.popular ? 'border-ugly-green-500/50 ring-2 ring-ugly-green-500/20' : 'border-slate-700/50'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              data-testid={`pricing-card-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ugly-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-ugly-green-500 to-ugly-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4" data-testid={`plan-name-${index}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-ugly-green-400" data-testid={`plan-price-${index}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-400 ml-2" data-testid={`plan-period-${index}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center space-x-3"
                    data-testid={`feature-${index}-${featureIndex}`}
                  >
                    {feature.included ? (
                      <i className="fas fa-check text-ugly-green-400 text-sm"></i>
                    ) : (
                      <i className="fas fa-times text-red-400 text-sm"></i>
                    )}
                    <span className={`${feature.included ? 'text-slate-300' : 'text-slate-500'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Purchase Button */}
              <button
                className={`cta-button w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-ugly-green-500 to-ugly-green-600 hover:from-ugly-green-600 hover:to-ugly-green-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-slate-300 border border-slate-600'
                }`}
                data-sellhub-product={index === 0 ? "2a07b97b-4743-464c-bbd1-870c2651aa08" : "14913aa1-2d2d-4b5d-be0b-d00a1b88f67d"}
                data-testid={`purchase-button-${index}`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-slate-400">
            All plans include access to our premium script library and community support
          </p>
        </motion.div>
      </div>
    </section>
  );
}