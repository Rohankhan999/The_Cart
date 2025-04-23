import React from 'react';
import Carousel from "../Components/Carousel/Carousel"
import Footer from "../Components/Footer/Footer"
const teamMembers = [
  {
    name: "Zain Ali",
    role: "CEO & Founder",
    image: "https://mighty.tools/mockmind-api/content/human/80.jpg",
  },
  {
    name: "Rohan Ahmed",
    role: "Frontend Developer",
    image: "https://mighty.tools/mockmind-api/content/human/104.jpg",
  },
  {
    name: "Areeba Khan",
    role: "UI/UX Designer",
    image: "https://mighty.tools/mockmind-api/content/human/118.jpg",
  },
  {
    name: "Tariq Mehmood",
    role: "Backend Developer",
    image: "https://mighty.tools/mockmind-api/content/human/92.jpg",
  },
  {
    name: "Sara Imran",
    role: "Marketing Manager",
    image: "https://mighty.tools/mockmind-api/content/human/129.jpg",
  },
  {
    name: "Zainab Khalid",
    role: "Human Resources Manager",
    image: "https://mighty.tools/mockmind-api/content/human/113.jpg",
  },
];

const OurTeam = () => {
  return (
    <div>
      <Carousel />
      <div style={{ backgroundColor: "#212529", color: "white", overflowX: "hidden", }}>
        <h2 className="text-center mb-5 fw-bold pt-5">Meet Our <span style={{ color: "#0D6EFD" }}>Team</span></h2>
        <div className="row g-4 pb-5" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "40px" }}>
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="card text-center shadow h-100">
                <img src={member.image} className="card-img-top rounded-circle p-3" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;

