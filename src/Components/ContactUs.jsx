import React from "react";
import Navbar from "./Navbar"; // Updated path
import Footer from "./header and footer/Footer";

function ContactUs() {
  return (
    <div>
      <Navbar page={"contact"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>This page is under construction. Check back soon!</p>
        <p>Email: support@stubhub.com (placeholder)</p>
      </div>
      <Footer />
    </div>
  );
}
export default ContactUs;