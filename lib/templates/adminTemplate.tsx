interface AdminTemplateProps {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const AdminTemplate = ({
  full_name,
  email,
  phone,
  subject,
  message,
}: AdminTemplateProps) => {
  return (
    <section
      style={{
        backgroundColor: "#050505",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#0d0d0d",
          border: "1px solid #f4b400",
          borderRadius: "24px",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "40px 50px",
            backgroundColor: "#111111",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1
                style={{
                  color: "#f4b400",
                  fontSize: "34px",
                  fontWeight: 800,
                  margin: 0,
                }}
              >
                BarberzLink
              </h1>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  marginTop: "8px",
                  marginBottom: 0,
                }}
              >
                New Contact Form Submission
              </p>
            </div>
            <span
              style={{
                backgroundColor: "#f4b400",
                color: "#000",
                fontSize: "12px",
                fontWeight: 700,
                padding: "8px 20px",
                borderRadius: "999px",
              }}
            >
              ADMIN ALERT
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "50px" }}>
          <h2
            style={{
              color: "#fff",
              fontSize: "32px",
              lineHeight: "42px",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            Someone submitted your contact form.
          </h2>
          <p
            style={{
              color: "#9f9f9f",
              fontSize: "16px",
              lineHeight: "28px",
              marginBottom: "40px",
            }}
          >
            A new support request has been received from your BarberzLink
            website.
          </p>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#111111",
              border: "1px solid rgba(244,180,0,0.2)",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {[
              { label: "Full Name", value: full_name },
              { label: "Email Address", value: email },
              { label: "Phone Number", value: phone || "Not provided" },
              { label: "Subject", value: subject },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  padding: "24px 28px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <p
                  style={{
                    color: "#f4b400",
                    fontSize: "13px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    marginBottom: "8px",
                    marginTop: 0,
                  }}
                >
                  {row.label}
                </p>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  {row.value}
                </p>
              </div>
            ))}

            {/* MESSAGE */}
            <div style={{ padding: "28px" }}>
              <p
                style={{
                  color: "#f4b400",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "16px",
                  marginTop: 0,
                }}
              >
                Message
              </p>
              <div
                style={{
                  backgroundColor: "#0a0a0a",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    color: "#d8d8d8",
                    fontSize: "16px",
                    lineHeight: "30px",
                    whiteSpace: "pre-line",
                    margin: 0,
                  }}
                >
                  {message}
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href={`mailto:${email}`}
              style={{
                display: "inline-block",
                backgroundColor: "#f4b400",
                color: "#000",
                fontSize: "16px",
                fontWeight: 700,
                padding: "16px 36px",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              Reply to Customer
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            padding: "32px 50px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            backgroundColor: "#0a0a0a",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#666", fontSize: "13px", margin: 0 }}>
            © 2026 BarberzLink. All rights reserved.
          </p>
          <p
            style={{
              color: "#f4b400",
              fontSize: "13px",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Professional. Modern. Connected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminTemplate;
