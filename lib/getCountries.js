export async function getAllCountries(useCache = true) {
  const cacheOption = useCache ? "force-cache" : "no-store";

  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/mledoze/countries/master/countries.json",
      { cache: cacheOption },
    );

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("API returned empty data");
    }

    const transformed = data.map((country) => ({
      cca3: country.cca3,
      name: {
        common: country.name.common,
        official: country.name.official,
      },
      capital: country.capital || [],
      region: country.region,
      subregion: country.subregion,
      population: country.population,
      languages: country.languages,
      currencies: country.currencies,
      timezones: country.timezones,
      maps: {
        googleMaps: `https://www.google.com/maps/place/${encodeURIComponent(
          country.name.common,
        )}`,
      },
      flags: {
        png: `https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`,
        svg: `https://flagcdn.com/${country.cca2.toLowerCase()}.svg`,
      },
    }));

    console.log("✅ Loaded", transformed.length, "countries");
    return transformed;
  } catch (error) {
    console.error("Failed to fetch countries:", error.message);
    return [];
  }
}

export async function getCountryByCode(code) {
  const all = await getAllCountries(false);
  return all.find((c) => c.cca3.toLowerCase() === code.toLowerCase());
}
