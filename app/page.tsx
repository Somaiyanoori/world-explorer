import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.title}>🌍 World Explorer</h1>

        <p style={styles.subtitle}>
          Explore countries around the world and learn about their flags,
          capitals, populations, currencies, and languages.
        </p>
        <Link href="/countries" style={styles.button}>
          Explore Countries →
        </Link>
      </section>
      <section style={styles.features}>
        <h2 style={styles.featuresTitle}>What You Can Do</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            🗺️
            <h3>Browse Countries</h3>
            <p>See all countries with flags and basic info</p>
          </div>
          <div style={styles.featureCard}>
            🔍
            <h3>Search Countries</h3>
            <p>Find any country by name instantly</p>
          </div>
          <div style={styles.featureCard}>
            📊
            <h3>View Details</h3>
            <p>See population, languages, currencies and more</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 32px",
    backgroundColor: "#f0f4ff",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    maxWidth: "600px",
    margin: "0 auto 32px",
    lineHeight: "1.6",
  },
  button: {
    display: "inline-block",
    padding: "14px 28px",
    backgroundColor: "#1a1a2e",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  },
  features: {
    padding: "60px 32px",
    textAlign: "center",
  },
  featuresTitle: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#1a1a2e",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "24px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  featureCard: {
    padding: "32px 16px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    fontSize: "16px",
  },
};