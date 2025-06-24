
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter Pro",
      price: "$99",
      period: "/month",
      description: "Perfect for small operations getting started",
      drivers: "1-15 drivers",
      features: [
        "Basic route optimization",
        "Driver mobile app",
        "Basic reporting",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Business Elite",
      price: "$299",
      period: "/month",
      description: "Ideal for growing delivery businesses",
      drivers: "16-50 drivers",
      features: [
        "Advanced AI optimization",
        "Real-time analytics",
        "Custom workflows",
        "Priority support",
        "Advanced integrations",
        "Multi-location support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Complete solution for large operations",
      drivers: "51-200 drivers",
      features: [
        "Full AI suite",
        "Predictive analytics",
        "White-label options",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    },
    {
      name: "Custom Solutions",
      price: "Custom",
      period: "",
      description: "Tailored for enterprise+ requirements",
      drivers: "200+ drivers",
      features: [
        "Everything in Enterprise",
        "Custom development",
        "Dedicated infrastructure",
        "Onsite training",
        "Success manager",
        "Compliance support"
      ],
      cta: "Get Quote",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade Pricing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Built to Scale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your delivery operation. All plans include our core AI features and enterprise security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border rounded-3xl p-8 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500">{plan.drivers}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* ROI Calculator CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your ROI</h3>
            <p className="text-gray-700 mb-6">See how much LinqOps can save your business with our interactive ROI calculator</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
              Calculate Savings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
