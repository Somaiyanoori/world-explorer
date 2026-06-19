import Link from "next/link";

export default function CountryCard({ country }) {
  return (
    <div style={styles.card}>
      <img
        src={country.flags?.png || country.flags?.svg}
        alt={`Flag of ${country.name.common}`}
        style={styles.flag}
      />

      <div style={styles.info}>
        <h2 style={styles.name}>{country.name.common}</h2>

        <p style={styles.detail}>
          Capital: {country.capital?.[0] || "No capital"}
        </p>

        <p style={styles.detail}>Region: {country.region}</p>

        <p style={styles.detail}>
          👥 Population: {country.population?.toLocaleString() || "N/A"}
        </p>

        <Link href={`/countries/${country.cca3}`} style={styles.button}>
          View Details →
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  flag: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  },
  info: {
    padding: "16px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#1a1a2e",
  },
  detail: {
    fontSize: "14px",
    color: "#555",
    margin: "4px 0",
  },
  button: {
    display: "inline-block",
    marginTop: "12px",
    padding: "8px 16px",
    backgroundColor: "#1a1a2e",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
    fontSize: "14px",
  },
};
