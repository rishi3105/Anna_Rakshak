/*import { partner1, partner2, partner3, partner4, partner5, partner6, partner7 } from "../../assets";
import '../css/sponsorLogo.css'

export default function sponsorLogo({ id }) {
    return (
        <section id={id}>
            <div className="mainContainer">
                <div className="customContainer">
                    <h1>Our Partners</h1>
                    <div className="client">
                        <ul>
                            <li>
                                <img src={partner1} alt="client1" />
                                <img src={partner1} alt="client1" />
                            </li>
                            <li>
                                <img src={partner2} alt="client2" />
                                <img src={partner2} alt="client2" />
                            </li>
                            <li>
                                <img src={partner3} alt="client3" />
                                <img src={partner3} alt="client3" />
                            </li>
                            <li>
                                <img src={partner4} alt="client4" />
                                <img src={partner4} alt="client4" />
                            </li>
                            <br />
                            <li>
                                <img src={partner6} alt="client6" />
                                <img src={partner6} alt="client6" />
                            </li>
                            <li>
                                <img src={partner5} alt="client5" />
                                <img src={partner5} alt="client5" />
                            </li>
                            <li>
                                <img src={partner7} alt="client7" />
                                <img src={partner7} alt="client7" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}*/



import React from "react";
import {NGO1,NGO2,NGO3,NGO4,NGO5,NGO6,NGO7,Resto1,Resto2,Resto3,Resto4,Resto5  } from "../../assets";

import '../css/sponsorLogo.css'

const sponsorLogo = () => {
  const organizations = [
    {
      name: "Helping Hands NGO",
      type: "NGO",
      address: "45 Bandra West, Mumbai",
      image: NGO1,
    },
    {
      name: "Happy Meals Restaurant",
      type: "RESTAURANT",
      address: "12 Andheri East, Mumbai",
      donations: 220,
      image: Resto1,
    },
    {
      name: "Feed the Hungry",
      type: "NGO",
      address: "23 Malad West, Mumbai",
      image: NGO2,
    },
    {
      name: "Sharing Smiles",
      type: "NGO",
      address: "34 Borivali East, Mumbai",
      image: NGO3,
    },
    {
      name: "Feeding India",
      type: "NGO",
      address: "56 Kandivali West, Mumbai",
      image: NGO4,
    },
    {
      name: "Food for Life",
      type: "NGO",
      address: "67 Goregaon East, Mumbai",
      image: NGO5,
    },
    {
      name: "Hunger Bros",
      type: "RESTAURANT",
      address: "78 Jogeshwari West, Mumbai",
      donations: 190,
      image: Resto2,
    },
    {
      name: "Food for Soul",
      type: "NGO",
      address: "89 Santacruz East, Mumbai",
      image: NGO6,
    },
    {
      name: "Shiv Sagar",
      type: "RESTAURANT",
      address: "90 Vile Parle West, Mumbai",
      donations: 140,
      image: Resto3,
    },
    {
      name: "Foodies",
      type: "RESTAURANT",
      address: "23 Malad West, Mumbai",
      donations: 50,
      image: Resto4,
    },
    {
      name: "Link View",
      type: "RESTAURANT",
      address: "77 Churchgate, Mumbai",
      donations: 220,
      image: Resto5,
    },
    {
      name: "Asha Foundation",
      type: "NGO",
      address: "Mhatre Road, 99, Mumbai",
      image: NGO7,
    },
  ];

  return (
    <div className="partners-page">
      <h1>Our Partners</h1>
      <div className="card-container">
        {organizations.map((org, index) => (
          <div className="card" key={index}>
            <div
              className="card-image"
              style={{
                backgroundImage: `url(${org.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="card-content">
              <h3>{org.name}</h3>
            </div>
            <div className="card-hover">
              <p>
                <strong>Address:</strong> {org.address}
              </p>
              {/* {org.type === "RESTAURANT" && (
                <p>
                  <strong>Donations:</strong> {org.donations} meals
                </p>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sponsorLogo;
