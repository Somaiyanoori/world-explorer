import CountryCard from "@/components/CountryCard";
import { getAllCountries } from "@/lib/getCountries";

export default async function CountriesPage() {
  const countries = await getAllCountries(true);

  if (countries.length === 0) {
    return (
      <div style={{ padding: "60px 32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", color: "#1a1a2e" }}>
          Failed to load countries
        </h1>
        <p style={{ color: "#777", marginTop: "16px" }}>
          The countries API is not responding. Please try again later.
        </p>
      </div>
    );
  }

  const sorted = [...countries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common),
  );

  return (
    <div
      style={{
        padding: "40px 32px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#1a1a2e",
          marginBottom: "8px",
        }}
      >
        Explore Countries
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "#777",
          marginBottom: "32px",
        }}
      >
        Showing {sorted.length} countries from around the world
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        {sorted.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
