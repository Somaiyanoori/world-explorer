import Link from "next/link";

export default async function CountryDetailsPage({ params }) {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.code}`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  const country = data[0];

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No languages listed";

  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name)
        .join(", ")
    : "No currency listed";

  // Get time zones as a string
  const timezones = country.timezones?.join(", ") || "Unknown";

  return (
    <div style={styles.container}>
      {/* Back Button */}
      <Link href="/countries" style={styles.backButton}>
        ← Back to Countries
      </Link>

      <div style={styles.content}>
        {/* Left Side - Flag */}
        <div style={styles.flagContainer}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={styles.flag}
          />
        </div>

        {/* Right Side - Details */}
        <div style={styles.details}>
          <h1 style={styles.title}>{country.name.common}</h1>

          <div style={styles.infoGrid}>
            <div>
              <p style={styles.info}>
                <strong>Official Name:</strong> {country.name.official}
              </p>
              <p style={styles.info}>
                <strong>🏛️ Capital:</strong>{" "}
                {country.capital?.[0] || "No capital"}
              </p>
              <p style={styles.info}>
                <strong>🌍 Region:</strong> {country.region}
              </p>
              <p style={styles.info}>
                <strong>📍 Subregion:</strong> {country.subregion || "Unknown"}
              </p>
              <p style={styles.info}>
                <strong>👥 Population:</strong>{" "}
                {country.population.toLocaleString()}
              </p>
            </div>

            <div>
              <p style={styles.info}>
                <strong>🗣️ Languages:</strong> {languages}
              </p>
              <p style={styles.info}>
                <strong>💰 Currencies:</strong> {currencies}
              </p>
              <p style={styles.info}>
                <strong>🕐 Time Zones:</strong> {timezones}
              </p>
            </div>
          </div>

          {/* Google Maps Link */}
          <a
            href={country.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.mapsButton}
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 32px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  backButton: {
    display: "inline-block",
    marginBottom: "32px",
    padding: "10px 20px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    alignItems: "center",
  },
  flagContainer: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
  },
  flag: {
    width: "100%",
    display: "block",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: "24px",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "32px",
  },
  info: {
    fontSize: "15px",
    color: "#444",
    margin: "8px 0",
    lineHeight: "1.5",
  },
  mapsButton: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#4285f4",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};
