import React from "react";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";

function Refunds() {
  return (
    <div>
      <Navbar page={"refunds"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Cancellations and Refunds</h2>
        <p>Refunds are available within 7 days of purchase if no course progress is made. Contact us at <a href="mailto:support@stubhub.com">support@stubhub.com</a> to request.</p>
        <p>Processing takes 5-7 business days. No refunds after course access.</p>
      </div>
      <Footer />
    </div>
  );
}
export default Refunds;