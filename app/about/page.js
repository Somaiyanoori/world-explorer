export default function AboutPage() {
  return (
    <div
      style={{
        padding: "40px 32px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "#1a1a2e",
          marginBottom: "32px",
        }}
      >
        About World Explorer
      </h1>

      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>📖 What is this project?</h2>
        <p style={textStyle}>
          World Explorer is a Next.js project that uses real API data to display
          countries around the world. Users can browse all countries, search by
          name, and view detailed information about each country including
          population, languages, currencies, and time zones.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}> Data Sources</h2>
        <p style={textStyle}>
          This project originally targeted the{" "}
          <a
            href="https://restcountries.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            REST Countries API
          </a>
          , but the v3.1 endpoint has been deprecated. To keep the app
          functional, the project now uses the same countries dataset hosted on
          GitHub, plus a free flag image service.
        </p>

        <div style={{ marginTop: "16px" }}>
          <p style={{ ...textStyle, marginBottom: "8px" }}>
            <strong> Countries Data:</strong>
          </p>
          <code style={codeStyle}>https://github.com/mledoze/countries</code>

          <p style={{ ...textStyle, marginTop: "12px", marginBottom: "8px" }}>
            <strong> Flag Images:</strong>
          </p>
          <code style={codeStyle}>https://flagcdn.com</code>
        </div>

        <p style={{ ...textStyle, marginTop: "16px", fontStyle: "italic" }}>
          Both sources are free and require no API key.
        </p>
      </div>

      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}> Next.js Topics Practiced</h2>
        <ul style={listStyle}>
          <li> Next.js App Router</li>
          <li> File-based routing</li>
          <li> Shared layouts (Navbar + Footer on all pages)</li>
          <li> Dynamic routes ([code] parameter)</li>
          <li> Server Components (countries page, details page)</li>
          <li> Client Components (search with useState)</li>
          <li> Data fetching with async/await</li>
          <li> Static caching with force-cache</li>
          <li> Dynamic rendering with no-store</li>
          <li> Passing props from server to client components</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}> Technologies Used</h2>
        <ul style={listStyle}>
          <li>Next.js 16+</li>
          <li>React 18+</li>
          <li>JavaScript</li>
          <li>CSS (inline styles)</li>
        </ul>
      </div>
    </div>
  );
}

// ===== Styles =====

const cardStyle = {
  backgroundColor: "#f9f9f9",
  borderRadius: "12px",
  padding: "28px",
  marginBottom: "24px",
  border: "1px solid #e0e0e0",
};

const sectionTitleStyle = {
  fontSize: "22px",
  fontWeight: "bold",
  color: "#1a1a2e",
  marginBottom: "12px",
};

const textStyle = {
  fontSize: "16px",
  color: "#555",
  lineHeight: "1.7",
};

const linkStyle = {
  color: "#4285f4",
  fontWeight: "bold",
  textDecoration: "none",
};

const codeStyle = {
  display: "block",
  padding: "10px 16px",
  backgroundColor: "#1a1a2e",
  color: "#4fc3f7",
  borderRadius: "6px",
  fontSize: "14px",
  wordBreak: "break-all",
};

const listStyle = {
  paddingLeft: "20px",
  lineHeight: "2",
  color: "#555",
  fontSize: "16px",
};
