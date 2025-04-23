import React from 'react';
import Footer from '../Components/Footer/Footer';
import Carousel from '../Components/Carousel/Carousel';

const jobs = [
  {
    title: "Frontend Developer",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    requirements: ["React.js", "Bootstrap", "API Integration"],
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-Time",
    requirements: ["Figma", "User Flows", "Prototyping"],
  },
  {
    title: "Backend Developer",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    requirements: ["Node.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Customer Support Executive",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    requirements: ["Good Communication", "Problem Solving", "Fluent in Urdu & English"],
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Internship",
    requirements: ["SEO", "Social Media Ads", "Email Campaigns"],
  },
];

const Career = () => {
  return (
    <div>
      <Carousel/>
    <div className="pt-5 pb-5" style={{ backgroundColor: "#212529", color: "white" }}>
      <h2 className="text-center fw-bold mb-4">Join Our Team at <span style={{ color: "#0D6EFD" }}>The Mart</span></h2>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
        {jobs.map((job, index) => (
          <div key={index} className="col-md-6">
            <div className="card shadow h-100">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="text-muted mb-1">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-muted mb-2">
                  <strong>Job Type:</strong> {job.type}
                </p>
                <ul>
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <button className="btn btn-primary mt-3">Apply Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Career;
