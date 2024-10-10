import React from "react";
import "./contactUs.scss";
import Layout from "../../components/Layout/Layout";
import cntactus from "../../assets/images/ContactUs.svg";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
const ContactUs = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={cntactus} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : ghanchisahil819@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 6353817841
          </p>
          {/* <p className="mt-3">
            <BiSupport /> :
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
