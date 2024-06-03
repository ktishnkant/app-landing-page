import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Discover Our App</h1>
        <p className="text-lg mb-6">The best app for all your needs.</p>
        <div className="space-x-4">
          <a href="/download" className="btn btn-primary">Download Now</a>
          <a href="#features" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
