import * as React from "react";



function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a
          href="/get-started"
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Features() {
  const featuresData = [
    {
      title: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Feature 2",
      description:
        "Pellentesque euismod, nisi eu bibendum consectetur, nisl nisi aliquam eros.",
    },
    {
      title: "Feature 3",
      description:
        "Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim.",
    },
  ];

  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

function MyComponent() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default MyComponent;