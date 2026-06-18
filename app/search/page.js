import CountrySearch from "../../components/CountrySearch";

export default async function SearchPage() {
  const res = await fetch("https://restcountries.com/v3.1/all", {
    cache: "force-cache",
  });

  const countries = await res.json();

  const sorted = countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔍 Search Countries</h1>
      <p style={styles.subtitle}>
        Type a country name to search through all countries
      </p>
      <CountrySearch countries={sorted} />
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
};
