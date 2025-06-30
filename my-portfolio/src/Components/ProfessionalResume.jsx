import React from "react";

const ProfessionalResume = () => {
  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "30px auto",
        padding: "40px",
        backgroundColor: "#ffffff",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        fontFamily: "'Open Sans', sans-serif",
        color: "#2d3436",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "10px",
          background: "linear-gradient(90deg, #6c5ce7, #00cec9)",
        }}
      ></div>

      <header
        style={{
          textAlign: "center",
          marginBottom: "30px",
          position: "relative",
        }}
      >
        <h1
          style={{
            margin: "0",
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#2d3436",
            letterSpacing: "-0.5px",
            background: "linear-gradient(90deg, #6c5ce7, #00cec9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Md Rakib Hossen
        </h1>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "1.1rem",
            color: "#636e72",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <svg
              style={{ width: "16px", marginRight: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6c5ce7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            +8801300981501
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <svg
              style={{ width: "16px", marginRight: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#6c5ce7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            rakibhossen.dev@gmail.com
          </span>

          <span style={{ display: "flex", alignItems: "center" }}>
            <svg
              style={{ width: "16px", marginRight: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="#6c5ce7"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6c5ce7", textDecoration: "none" }}
            >
              GitHub
            </a>
          </span>
        </p>
      </header>

      <div style={{ display: "flex", gap: "30px" }}>
        {/* Left Column */}
        <div style={{ flex: "1" }}>
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#6c5ce7",
                marginBottom: "15px",
                paddingBottom: "8px",
                borderBottom: "2px solid #dfe6e9",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#6c5ce7",
                }}
              ></span>
              Professional Summary
            </h2>
            <p
              style={{
                lineHeight: "1.6",
                color: "#636e72",
              }}
            >
              Passionate Full Stack Developer with expertise in modern
              JavaScript frameworks. Strong problem-solving skills and
              experience in building scalable web applications. Committed to
              writing clean, efficient code and staying updated with emerging
              technologies.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#6c5ce7",
                marginBottom: "15px",
                paddingBottom: "8px",
                borderBottom: "2px solid #dfe6e9",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#6c5ce7",
                }}
              ></span>
              Technical Skills
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                React.js
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Node.js
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Express
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                MongoDB
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                JavaScript
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                TypeScript
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                HTML5
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                CSS3
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Tailwind CSS
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Git
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                REST APIs
              </span>
              <span
                style={{
                  backgroundColor: "#f1f2f6",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Firebase
              </span>
            </div>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#6c5ce7",
                marginBottom: "15px",
                paddingBottom: "8px",
                borderBottom: "2px solid #dfe6e9",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#6c5ce7",
                }}
              ></span>
              Education
            </h2>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  margin: "0 0 5px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#2d3436",
                }}
              >
                Bachelor of Science in Computer Science
              </h3>
              <p
                style={{
                  margin: "0",
                  fontSize: "0.95rem",
                  color: "#636e72",
                  fontWeight: "500",
                }}
              >
                Daffodil International University
              </p>
              <p
                style={{
                  margin: "5px 0 0",
                  fontSize: "0.85rem",
                  color: "#b2bec3",
                }}
              >
                CGPA: 2.85/4.0
              </p>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div style={{ flex: "1" }}>
          <section style={{ marginBottom: "30px" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#6c5ce7",
                marginBottom: "15px",
                paddingBottom: "8px",
                borderBottom: "2px solid #dfe6e9",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "0",
                  width: "50px",
                  height: "2px",
                  backgroundColor: "#6c5ce7",
                }}
              ></span>
              Projects
            </h2>
            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  margin: "0 0 5px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#2d3436",
                }}
              >
                Event Management System
              </h3>
              <ul
                style={{
                  margin: "5px 0",
                  paddingLeft: "20px",
                  color: "#636e72",
                }}
              >
                <li>
                  Full-stack application for event organizers and attendees
                </li>
                <li>
                  Features: JWT authentication, real-time updates, payment
                  integration
                </li>
                <li>Tech: React, Node.js, MongoDB, Socket.io</li>
              </ul>
              <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                
                   
                     
                
                 
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  margin: "0 0 5px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#2d3436",
                }}
              >
                E-commerce Dashboard
              </h3>
              <ul
                style={{
                  margin: "5px 0",
                  paddingLeft: "20px",
                  color: "#636e72",
                }}
              >
                <li>
                  Admin panel for managing products, orders, and customers
                </li>
                <li>
                  Features: Data visualization, CSV export, role-based access
                </li>
                <li>Tech: React, Chart.js, Express.js, PostgreSQL</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  margin: "0 0 5px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#2d3436",
                }}
              >
                Travel Booking App
              </h3>
              <ul
                style={{
                  margin: "5px 0",
                  paddingLeft: "20px",
                  color: "#636e72",
                }}
              >
                <li>Mobile-first travel booking platform</li>
                <li>
                  Features: Google Maps integration, payment gateway, reviews
                </li>
                <li>Tech: Next.js, Tailwind CSS, Firebase</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResume;
