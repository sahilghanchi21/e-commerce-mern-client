import React from "react";
import "./layout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <div className="main-container">
        <div className="header-component">
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <title>{title}</title>
          </Helmet>
          <Header />
        </div>
        <main className="layout-main-container">
          <Toaster />
          {children}
        </main>
        <div className="footer-component">
          <Footer />
        </div>
      </div>
    </>
  );
};
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "sahil ghanchi",
};
export default Layout;
