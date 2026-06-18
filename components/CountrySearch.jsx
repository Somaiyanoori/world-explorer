"use client";

import { useState } from "react";
import Link from "next/link";

export default function CountrySearch({ countries }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      {/* Search Input Box */}
      <input
        type="text"
        placeholder="Search for a country... (e.g. Japan, Germany)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // onChange fires every time user types a letter
        style={styles.input}
      />

      {/* Show how many results found */}
      <p style={styles.resultCount}>
        {searchTerm
          ? `Found ${filtered.length} countries matching "${searchTerm}"`
          : `Showing all ${countries.length} countries`}
      </p>

      {/* Show results */}
      <div style={styles.grid}>
        {filtered.map((country) => (
          <div key={country.cca3} style={styles.card}>
            <img
              src={country.flags.png}
              alt={country.name.common}
              style={styles.flag}
            />
            <div style={styles.cardInfo}>
              <h3 style={styles.name}>{country.name.common}</h3>
              <p style={styles.detail}>
                🏛️ {country.capital?.[0] || "No capital"}
              </p>
              <p style={styles.detail}>🌍 {country.region}</p>
              <Link href={`/countries/${country.cca3}`} style={styles.link}>
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filtered.length === 0 && searchTerm && (
        <div style={styles.noResults}>
          <p>❌ No countries found matching "{searchTerm}"</p>
          <p>Try searching for: Afghanistan, Japan, Germany, Brazil</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "14px 20px",
    fontSize: "16px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    marginBottom: "16px",
    outline: "none",
    boxSizing: "border-box",
  },
  resultCount: {
    color: "#777",
    marginBottom: "24px",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "white",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },
  flag: {
    width: "100%",
    height: "130px",
    objectFit: "cover",
  },
  cardInfo: {
    padding: "14px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "6px",
    color: "#1a1a2e",
  },
  detail: {
    fontSize: "13px",
    color: "#666",
    margin: "3px 0",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    padding: "6px 14px",
    backgroundColor: "#1a1a2e",
    color: "white",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "13px",
  },
  noResults: {
    textAlign: "center",
    padding: "40px",
    color: "#777",
  },
};
