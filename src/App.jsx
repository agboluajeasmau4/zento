
// import { useEffect } from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import VendorOS from "./pages/VendorOS";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./styles.css";

// SEO metadata for each page
const pageSEO = {
"/": {
  title: "Zento | Business Automation & Digital Solutions",
  description:
    "Zento builds business automation systems, custom software, and sales solutions that help businesses simplify operations, manage sales, and grow.",
  keywords:
    "Zento, business automation, sales automation, digital solutions, custom software, business management systems, VendorOS, Nigeria",
},
  "/services": {
    title: "Our Services | Zento",
    description:
      "Explore Zento's business automation, custom software, WhatsApp commerce, CRM, and digital solutions for growing businesses.",
    keywords:
      "business automation services, custom software development, WhatsApp automation, CRM systems, digital solutions Nigeria",
  },

  "/vendoros": {
    title: "Zento VendorOS | Business Management System",
    description:
      "Manage sales, inventory, orders, expenses, customers, and business performance with Zento VendorOS.",
    keywords:
      "Zento VendorOS, vendor management system, POS software, inventory management, sales tracking, business management software",
  },

  "/about": {
    title: "About Zento | Automate. Convert. Grow.",
    description:
      "Discover Zento, a digital automation agency building practical systems that help businesses operate smarter and grow.",
    keywords:
      "about Zento, Zento automation agency, business technology, digital transformation Nigeria",
  },

  "/case-studies": {
    title: "Case Studies | Zento Digital Solutions",
    description:
      "Explore business automation projects, digital systems, and operational solutions created by Zento.",
    keywords:
      "Zento case studies, business automation projects, digital transformation, business software solutions",
  },

  "/contact": {
    title: "Contact Zento | Let's Build Better Systems",
    description:
      "Contact Zento to discuss business automation, custom software, digital solutions, and systems for your business.",
    keywords:
      "contact Zento, business automation consultation, custom software Nigeria, Zento digital solutions",
  },
};

function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageSEO[pathname] || pageSEO["/"];

    document.title = metadata.title;

const updateMeta = (key, content, attribute = "name") => {
  let tag = document.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};


    updateMeta("description", metadata.description);
    updateMeta("keywords", metadata.keywords);
    updateMeta("robots", "index, follow");

   updateMeta("og:title", metadata.title, "property");
updateMeta("og:description", metadata.description, "property");
updateMeta("og:type", "website", "property");
  }, [pathname]);

  return null;
}

function WebsiteLayout({ theme, toggleTheme }) {
  return (
    <>
      <SEO />

      <Navbar
  theme={theme}
  toggleTheme={toggleTheme}
/>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vendoros" element={<VendorOS />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/case-studies"
            element={<CaseStudies />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route
            path="*"
            element={<div className="not-found">
              <h1>Page not found</h1>
              <p>The page you are looking for doesn't exist.</p>
            </div>}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}


function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("zento-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem("zento-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <BrowserRouter>
      <WebsiteLayout
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </BrowserRouter>
  );
}


export default App;
