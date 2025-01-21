import React from "react";
import '../scss/TermsAndConditions.scss';
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
        <div className="background-gradient3"></div>
      <h1>Terms and Conditions</h1>
      <p>Welcome to our application. By using this application, you agree to the following terms and conditions:</p>
      
      <h2>1. Use of the Application</h2>
      <p>This application is provided for informational purposes only. You agree to use it responsibly.</p>

      <h2>2. Privacy</h2>
      <p>Your privacy is important to us. Please read our Privacy Policy for more details.</p>

      <h2>3. Intellectual Property</h2>
      <p>All content provided in this application is the property of its respective owners.</p>

      <h2>4. Liability</h2>
      <p>We are not liable for any damages arising from the use of this application.</p>

      <h2>5. Changes to Terms</h2>
      <p>We reserve the right to change these terms at any time. Continued use of the application signifies your acceptance of the updated terms.</p>

      <p>If you have any questions about these terms, please <Link to="/Contact" ><button className="terms1">contact us</button></Link>.</p>
    </div>
  );
};

export default TermsAndConditions;
