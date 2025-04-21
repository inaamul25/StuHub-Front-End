import React from "react";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";

function Terms() {
  return (
    <div>
      <Navbar page={"terms"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Terms and Conditions</h2>
        <p>Last updated: April 21, 2025</p>
        <p>By using StuHub, you agree to our services under these terms. Enrollment in courses implies acceptance of payment policies and no refunds after 7 days.</p>
        <p>For full details, check back as we update this section.</p>
      </div>
      <Footer />
    </div>
  );
}
export default Terms;