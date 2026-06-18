export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        🌍 World Explorer | Built with Next.js | Data from{" "}
        <a href="https://restcountries.com" target="_blank" style={styles.link}>
          REST Countries API
        </a>
      </p>
      <p style={styles.text}>© 2024 World Explorer. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1a1a2e",
    color: "white",
    textAlign: "center",
    padding: "24px",
    marginTop: "40px",
  },
  text: {
    margin: "8px 0",
    fontSize: "14px",
  },
  link: {
    color: "#4fc3f7",
    textDecoration: "none",
  },
};
