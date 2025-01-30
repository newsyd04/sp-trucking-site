import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-gray-900 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600">&copy; 2009-2023 SP Trucking INC. All rights reserved.</p>
        <div className="mt-4">
          <a href="mailto:scoilbhreacchluain@gmail.com" className="text-gray-600 hover:text-gray-400 mx-2">
            Email
          </a>
          <a href="tel:+353669157436" className="text-gray-600 hover:text-gray-400 mx-2">
            Phone/Fax
          </a>
          <a href="tel:+353860689704" className="text-gray-600 hover:text-gray-400 mx-2">
            Mobile
          </a>
        </div>
        <div className="mt-4">
          <a
            href={`Code-of-Behaviour-and-Anti-Bullying-Policy.pdf`}
            className="text-gray-600 hover:text-gray-400 mx-2"
          >
            Code of Behaviour and Anti-bullying Policy
          </a>
          <a
            href={`Annual-Admissions-Notice-2024-2025.pdf`}
            className="text-gray-600 hover:text-gray-400 mx-2"
          >
            Admissions Notice
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
