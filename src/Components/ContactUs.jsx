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
        <link rel="canonical" href="https://stu-hub-front-end.vercel.app/contact-us" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Us",
              "url": "https://stu-hub-front-end.vercel.app/contact-us",
              "description": "Contact StuHub LMS for support or queries.",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@stu-hub.com",
                "contactType": "customer support",
                "availableLanguage": "English"
              },
              "publisher": {
                "@type": "Organization",
                "name": "StuHub LMS"
              }
            }
          `}
        </script>
      </Helmet>
      <Navbar page={"contact-us"} />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, feel free to reach out to us.</p>
        <p>Email: <a href="mailto:support@stu-hub.com">support@stu-hub.com</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
