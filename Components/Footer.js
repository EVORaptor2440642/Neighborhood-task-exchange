import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Neighborhood Task Exchange. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#282c34",
    color: "#ffffff",
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;