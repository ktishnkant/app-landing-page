import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section id="features" className="features-section bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-item p-4 border rounded shadow">
              <img src={feature.icon} alt={feature.title} className="mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
