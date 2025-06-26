
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Pricing = () => {
  const [showRoiCalculator, setShowRoiCalculator] = useState(false);
  const [driversCount, setDriversCount] = useState(10);
  const [deliveriesPerDriver, setDeliveriesPerDriver] = useState(20);
  const [currentCostPerDelivery, setCurrentCostPerDelivery] = useState(5);
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
            <Button 
              onClick={() => setShowRoiCalculator(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              Calculate Savings
            </Button>
          </div>
        </div>
        
        {/* ROI Calculator Modal */}
        {showRoiCalculator && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">ROI Calculator</h3>
                <button 
                  onClick={() => setShowRoiCalculator(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-8">
                <div className="text-left">
                  <p className="text-gray-700 mb-4">
                    See how much you can save by implementing LinqOps delivery management platform. 
                    Adjust the parameters below to calculate your potential return on investment.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900">Your Operation</h4>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <Label htmlFor="drivers">Number of Drivers</Label>
                        <span className="font-medium">{driversCount}</span>
                      </div>
                      <Slider
                        id="drivers"
                        min={1}
                        max={200}
                        step={1}
                        value={[driversCount]}
                        onValueChange={(value) => setDriversCount(value[0])}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <Label htmlFor="deliveries">Deliveries per Driver (daily)</Label>
                        <span className="font-medium">{deliveriesPerDriver}</span>
                      </div>
                      <Slider
                        id="deliveries"
                        min={1}
                        max={50}
                        step={1}
                        value={[deliveriesPerDriver]}
                        onValueChange={(value) => setDeliveriesPerDriver(value[0])}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="current-cost">Current Cost per Delivery ($)</Label>
                      <Input
                        id="current-cost"
                        type="number"
                        min={1}
                        step={0.5}
                        value={currentCostPerDelivery}
                        onChange={(e) => setCurrentCostPerDelivery(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900">Your Potential Savings</h4>
                    
                    <div className="space-y-4">
                      {/* Calculate metrics */}
                      {(() => {
                        // Calculate metrics
                        const totalDeliveriesDaily = driversCount * deliveriesPerDriver;
                        const totalDeliveriesMonthly = totalDeliveriesDaily * 22; // Assuming 22 working days
                        const currentMonthlyCost = totalDeliveriesMonthly * currentCostPerDelivery;
                        
                        // LinqOps improves efficiency by reducing cost per delivery
                        const linqOpsCostReduction = 0.30; // 30% reduction
                        const linqOpsCostPerDelivery = currentCostPerDelivery * (1 - linqOpsCostReduction);
                        const linqOpsMonthlyCost = totalDeliveriesMonthly * linqOpsCostPerDelivery;
                        
                        // Calculate savings
                        const monthlySavings = currentMonthlyCost - linqOpsMonthlyCost;
                        const annualSavings = monthlySavings * 12;
                        const savingsPercentage = linqOpsCostReduction * 100;
                        
                        return (
                          <>
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <p className="text-gray-600 text-sm">Monthly Deliveries</p>
                              <p className="text-2xl font-bold text-gray-900">{totalDeliveriesMonthly.toLocaleString()}</p>
                            </div>
                            
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <p className="text-gray-600 text-sm">Current Monthly Cost</p>
                              <p className="text-2xl font-bold text-gray-900">${currentMonthlyCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                            </div>
                            
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <p className="text-gray-600 text-sm">Monthly Savings with LinqOps</p>
                              <p className="text-2xl font-bold text-blue-600">${monthlySavings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 shadow-sm">
                              <p className="text-white text-sm">Annual Savings</p>
                              <p className="text-2xl font-bold text-white">${annualSavings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                            </div>
                            
                            <div className="text-center mt-4">
                              <p className="text-gray-700">LinqOps can help you reduce delivery costs by up to <span className="font-bold text-blue-600">{savingsPercentage}%</span></p>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                        onClick={() => setShowRoiCalculator(false)}
                      >
                        Get Started Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
