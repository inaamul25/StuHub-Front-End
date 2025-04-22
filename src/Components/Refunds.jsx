import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";

function Refunds() {
  return (
    <div>
      <Helmet>
        <title>Refund Policy | StuHub LMS</title>
        <meta name="description" content="Learn about the refund and cancellation policies of StuHub LMS." />
      </Helmet>
      <Navbar page={"refunds"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Cancellations and Refunds</h2>
        <p>Refunds are available within 7 days of purchase, provided no course progress has been made.</p>
        <p>To request a refund, email us at <a href="mailto:support@stu-hub.com">support@stu-hub.com</a>.</p>
        <p>Processing time: 5–7 business days. No refunds once course access has been utilized.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Refunds;
