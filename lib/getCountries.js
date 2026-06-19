const COUNTRIES_API =
  "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";

function transformCountry(country) {
  return {
    cca3: country.cca3,
    cca2: country.cca2,
    name: {
      common: country.name?.common || "Unknown",
      official: country.name?.official || "Unknown",
    },
    capital: country.capital || [],
    region: country.region || "Unknown",
    subregion: country.subregion || "",
    population: country.population || 0,
    languages: country.languages || {},
    currencies: country.currencies || {},
    timezones: country.timezones || [],
    maps: {
      googleMaps: `https://www.google.com/maps/place/${encodeURIComponent(
        country.name?.common || "",
      )}`,
    },
    flags: {
      png: country.cca2
        ? `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`
        : "",
      svg: country.cca2
        ? `https://flagcdn.com/${country.cca2.toLowerCase()}.svg`
        : "",
    },
  };
}

export async function getAllCountries(useCache = true) {
  const cacheOption = useCache ? "force-cache" : "no-store";

  try {
    const res = await fetch(COUNTRIES_API, { cache: cacheOption });

    if (!res.ok) {
      throw new Error(`API status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Empty data from API");
    }

    const transformed = data.map(transformCountry).filter((c) => c.cca3);
    return transformed;
  } catch (error) {
    console.error("Failed to fetch countries:", error.message);
    return [];
  }
}

export async function getCountryByCode(code) {
  if (!code) return null;

  try {
    const all = await getAllCountries(false);
    const country = all.find(
      (c) => c.cca3 && c.cca3.toLowerCase() === code.toLowerCase(),
    );
    return country || null;
  } catch (error) {
    console.error("Failed to fetch country:", error.message);
    return null;
  }
}
