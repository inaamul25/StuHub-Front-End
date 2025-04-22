import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";

function Shipping() {
  return (
    <div>
      <Helmet>
        <title>Shipping Policy | StuHub LMS</title>
        <meta
          name="description"
          content="Shipping policy details for StuHub LMS."
        />
      </Helmet>
      <Navbar page={"shipping"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Shipping Policy</h2>
        <p>Last updated: April 21, 2025</p>
        <p>
          StuHub LMS provides digital learning solutions only. Therefore, we do not offer any physical shipping services.
        </p>
        <p>
          Once your payment is successfully processed, you will receive immediate access to your enrolled courses through your dashboard or registered email.
        </p>
        <p>
          In rare cases where access is delayed, please contact us at <a href="mailto:support@stu-hub.com">support@stu-hub.com</a> and our support team will assist you promptly.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
