import React from "react";
import "./service.css";

const services = [
  {
    id: 1,
    title: "UI / UX Design",
    icon: "🎨",
    description:
      "Designing intuitive and aesthetic interfaces with Figma and modern design principles focused on user experience.",
  },
  {
    id: 2,
    title: "Frontend Development",
    icon: "💻",
    description:
      "Building fast and interactive web apps with React, JavaScript, and Tailwind CSS — focusing on performance and usability.",
  },
  {
    id: 3,
    title: "Backend Development",
    icon: "{}",
    description:
      "Creating secure, scalable backends with PHP, Laravel, and Node.js to ensure stability and high performance.",
  },
  {
    id: 4,
    title: "Database & Analysis",
    icon: "🧩",
    description:
      "Managing and optimizing data using MySQL, SQL, and PL/SQL with UML-based architecture planning.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Services</h2>


      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
