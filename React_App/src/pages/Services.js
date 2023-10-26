import React from 'react';
import "../styles/Services.css";

const howItWorksData = [
  {
    title: "Precision Mapping",
    content:
      "We use advanced Geographic Information System (GIS) technology to create detailed maps of your farm, identifying the unique attributes of each area.",
    benefits: [
      "Accurate land analysis",
      "Optimized resource allocation",
      "Improved crop productivity",
    ],
  },
  {
    title: "Real-Time Data",
    content:
      "Deploying IoT sensors and weather stations, we gather real-time data on soil moisture, temperature, and other vital metrics, helping you make informed decisions at every stage of the crop growth cycle.",
    benefits: [
      "Timely insights for irrigation management",
      "Enhanced disease and pest control",
      "Optimal harvest timing",
    ],
  },
  {
    title: "Tailored Management",
    content:
      "With the information at hand, our team works closely with you to design customized crop management strategies for each zone, ensuring your crops receive the specific care they need to thrive.",
    benefits: [
      "Maximized crop potential",
      "Reduced resource waste",
      "Sustainable farming practices",
    ],
  },
];

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <p>At our farm management company, we offer a range of services to help you maximize your crop yield and achieve sustainable farming practices. Explore our services below:</p>
      <div className="service-container">
        {howItWorksData.map((item, index) => (
          <div className="service-item" key={index}>
            <details>
              <summary>{item.title}</summary>
              <p>{item.content}</p>
              <p>Benefits of {item.title}:</p>
              <ul>
                {item.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;