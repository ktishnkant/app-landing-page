import React from 'react';

const pricingPlans = [
  { plan: "Basic", price: "$9.99/month", features: ["Feature A", "Feature B", "Feature C"] },
  { plan: "Premium", price: "$19.99/month", features: ["Feature A", "Feature B", "Feature C", "Feature D"] }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-item p-4 border rounded shadow">
              <h3 className="text-xl font-semibold mb-4">{plan.plan}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">Choose Plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
