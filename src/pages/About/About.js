import React from "react";
import Layout from "../../components/Layout/Layout";
import "./about.scss";
import aboutus from "../../assets/images/AboutUs.svg";
const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row aboutus ">
        <div className="col-md-6 ">
          <img src={aboutus} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
        <h1 className="bg-primary p-2 text-white text-center">ABOUT US</h1>
          <h2 className="text-justify mt-2">Welcome to E-commerce shop!</h2>
          <p className="text-justify mt-2">
            Starting as a small business in Kalol/Gujarat/India/2023, we have
            big dreams. Our passion for [PRODUCTS CATEGORY NAME], means that we
            provide our customers with nothing but the highest quality of
            products, that are guaranteed to meet their needs and keep them
            satisfied!
          </p>
          <p className="text-justify mt-2">
            With a motivated team, we strive to be the creative minds that bring
            a smile to your face. That’s why we’re always looking for innovative
            new ways to get the best to you.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
