import CountrySearch from "@/components/CountrySearch";
import { getAllCountries } from "@/lib/getCountries";

export default async function SearchPage() {
  const countries = await getAllCountries(true);

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
        🔍 Search Countries
      </h1>
      <p
        style={{
          fontSize: "16px",
          color: "#777",
          marginBottom: "32px",
        }}
      >
        Type a country name to search through all countries
      </p>

      {sorted.length === 0 ? (
        <p style={{ color: "red", textAlign: "center", padding: "40px" }}>
          Could not load countries. Check your internet connection.
        </p>
      ) : (
        <CountrySearch countries={sorted} />
      )}
    </div>
  );
}
