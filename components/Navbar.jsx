import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.logo}>
        World Explorer
      </Link>

      <div style={styles.links}>
        <Link href="/" style={styles.link}>
          Home
        </Link>
        <Link href="/countries" style={styles.link}>
          Countries
        </Link>
        <Link href="/search" style={styles.link}>
          Search
        </Link>
        <Link href="/about" style={styles.link}>
          About
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1a1a2e",
    color: "white",
    flexWrap: "wrap",
    gap: "16px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};
