import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";

function Shipping() {
  return (
    <div>
      <Helmet>
        <title>Shipping Policy | StuHub LMS</title>
        <meta name="description" content="Read about the shipping and delivery policies of StuHub LMS." />
      </Helmet>
      <Navbar page={"shipping"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Shipping Policy</h2>
        <p>StuHub LMS provides digital learning content only. There is no physical shipping involved.</p>
        <p>All courses and materials are delivered instantly via your account upon successful payment.</p>
        <p>If you face any access issues, please contact us at <a href="mailto:support@stu-hub.com">support@stu-hub.com</a>.</p>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
