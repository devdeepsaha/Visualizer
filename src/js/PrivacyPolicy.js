import React from "react";
import '../scss/PrivacyPolicy.scss';
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p className="privacy">
        This Privacy Policy explains how we collect, use, and disclose
        information about you when you use our services. We are committed to
        protecting your privacy and ensuring transparency about our practices.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of information:
        <ul>
          <li>Personal information you provide directly (e.g., name, email).</li>
          <li>Data collected automatically (e.g., usage data, cookies).</li>
        </ul>
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        The information we collect is used to:
        <ul>
          <li>Provide and improve our services.</li>
          <li>Communicate with you.</li>
          <li>Ensure security and compliance.</li>
        </ul>
      </p>
      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please <Link to="/Contact" ><button className="terms1">contact us</button></Link> at support@visco.com.</p>
    </div>
  );
};

export default PrivacyPolicy;
