import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./header and footer/Footer";

function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contact Us | StuHub LMS</title>
        <meta name="description" content="Contact StuHub LMS for support, feedback, or queries." />
      </Helmet>
      <Navbar page={"contact"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, feel free to reach out to us.</p>
        <p>Email: <a href="mailto:inaamulh66@gmail.com">support@stu-hub.com</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
