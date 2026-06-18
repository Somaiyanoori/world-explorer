import Link from "next/link";
import { getCountryByCode } from "@/lib/getCountries";

export default async function CountryDetailsPage({ params }) {
  const code = params.code;
  const country = await getCountryByCode(code);

  if (!country) {
    return (
      <div style={{ padding: "60px 32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "28px", color: "#1a1a2e" }}>
          Country Not Found
        </h1>
        <p style={{ color: "#777", marginTop: "12px" }}>
          We could not find country with code: {code}
        </p>
        <Link
          href="/countries"
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#1a1a2e",
            color: "white",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          ← Back to Countries
        </Link>
      </div>
    );
  }

  country.languages && typeof country.languages === "object"
    ? Object.values(country.languages).join(", ")
    : "No languages listed";

  const currencies =
    country.currencies && typeof country.currencies === "object"
      ? Object.values(country.currencies)
          .map((c) => `${c.name}${c.symbol ? ` (${c.symbol})` : ""}`)
          .join(", ")
      : "No currency listed";

  const timezones = Array.isArray(country.timezones)
    ? country.timezones.join(", ")
    : "Unknown";

  const googleMapsLink = country.maps?.googleMaps || "#";

  return (
    <div
      style={{
        padding: "40px 32px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <Link
        href="/countries"
        style={{
          display: "inline-block",
          marginBottom: "32px",
          padding: "10px 20px",
          backgroundColor: "#f0f0f0",
          color: "#333",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        ← Back to Countries
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        <div>
          <img
            src={country.flags?.png}
            alt={`Flag of ${country.name.common}`}
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <div>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#1a1a2e",
              marginBottom: "24px",
            }}
          >
            {country.name.common}
          </h1>

          <div style={{ marginBottom: "24px" }}>
            <InfoRow label="Official Name" value={country.name.official} />
            <InfoRow
              label="Capital"
              value={country.capital?.[0] || "No capital"}
            />
            <InfoRow label="Region" value={country.region} />
            <InfoRow
              label="📍 Subregion"
              value={country.subregion || "Unknown"}
            />
            <InfoRow
              label="Population"
              value={country.population?.toLocaleString() || "Unknown"}
            />
          </div>

          <div style={{ marginBottom: "32px" }}>
            <InfoRow label="Languages" value={languages} />
            <InfoRow label="Currencies" value={currencies} />
            <InfoRow label="Time Zones" value={timezones} />
          </div>

          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#4285f4",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <p
      style={{
        fontSize: "15px",
        color: "#444",
        margin: "10px 0",
        lineHeight: "1.5",
      }}
    >
      <strong>{label}:</strong> {value}
    </p>
  );
}
