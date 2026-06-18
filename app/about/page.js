export default function AboutPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About World Explorer</h1>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>What is this project?</h2>
        <p style={styles.text}>
          World Explorer is a Next.js project that uses real API data to display
          countries around the world. Users can browse all countries, search by
          name, and view detailed information about each country including
          population, languages, currencies, and time zones.
        </p>
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>API Used</h2>
        <p style={styles.text}>
          This project uses the{" "}
          <a
            href="https://restcountries.com"
            target="_blank"
            style={styles.link}
          >
            REST Countries API
          </a>{" "}
          which provides free, real-time data about all countries in the world
          including flags, capitals, populations, and more.
        </p>
        <code style={styles.code}>https://restcountries.com/v3.1/all</code>
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Next.js Topics Practiced</h2>
        <ul style={styles.list}>
          <li>Next.js App Router</li>
          <li>File-based routing</li>
          <li>Shared layouts (Navbar + Footer on all pages)</li>
          <li>Dynamic routes ([code] parameter)</li>
          <li>Server Components (countries page, details page)</li>
          <li>Client Components (search with useState)</li>
          <li>Data fetching with async/await</li>
          <li>Static caching with force-cache</li>
          <li>Dynamic rendering with no-store</li>
          <li>Passing props between server and client components</li>
        </ul>
      </div>

      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Technologies Used</h2>
        <ul style={styles.list}>
          <li>Next.js 14</li>
          <li>React 18</li>
          <li>REST Countries API</li>
          <li>Plain CSS (inline styles)</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 32px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: "32px",
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "28px",
    marginBottom: "24px",
    border: "1px solid #e0e0e0",
  },
  sectionTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: "12px",
  },
  text: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.7",
  },
  link: {
    color: "#4285f4",
    textDecoration: "none",
    fontWeight: "bold",
  },
  code: {
    display: "block",
    marginTop: "12px",
    padding: "10px 16px",
    backgroundColor: "#1a1a2e",
    color: "#4fc3f7",
    borderRadius: "6px",
    fontSize: "14px",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "2",
    color: "#555",
    fontSize: "16px",
  },
};
