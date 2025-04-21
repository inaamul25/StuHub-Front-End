import React from "react";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";

function Privacy() {
  return (
    <div>
      <Navbar page={"privacy"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Privacy Policy</h2>
        <p>Last updated: April 21, 2025</p>
        <p>We collect your name, email, and payment details to provide services. Data is stored securely and not shared with third parties.</p>
        <p>Read more details soon as we finalize this policy.</p>
      </div>
      <Footer />
    </div>
  );
}
export default Privacy;