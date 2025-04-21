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
        <p>
          We collect your name, email, and payment details to process transactions and provide our services. This data is used to improve our platform and ensure a smooth user experience. All information is stored securely using encryption and is not shared with third parties, except as required by law or with your consent.
        </p>
        <p>
          You have the right to access, correct, or delete your data by contacting us at support@stu-hub.com. For more details, please check back soon as we finalize this policy.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export default Privacy;