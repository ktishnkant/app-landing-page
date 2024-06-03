import React from 'react';

const testimonials = [
  { name: "User One", feedback: "This app is fantastic! It has changed my life.", avatar: "https://via.placeholder.com/50" },
  { name: "User Two", feedback: "I can't imagine my daily routine without this app.", avatar: "https://via.placeholder.com/50" }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item p-4 border rounded shadow">
              <img src={testimonial.avatar} alt={testimonial.name} className="mb-4 rounded-full" />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
