import CountryCard from "../../components/CountryCard";

export default async function CountriesPage() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-cache",
  });

  const countries = await res.json();

  const sorted = countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌍 Explore Countries</h1>
      <p style={styles.subtitle}>
        Showing {sorted.length} countries from around the world
      </p>

      <div style={styles.grid}>
        {sorted.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 32px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: "8px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#777",
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "24px",
  },
};
