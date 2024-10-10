import React from "react";
import "./policy.scss";
import Layout from "../../components/Layout/Layout";
import privacypolicy from "../../assets/images/PrivacyPolicy.svg";
const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row privacyPolicy ">
        <div className="col-md-6 ">
          <img src={privacypolicy} alt="contactus" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
        <h1 className="bg-primary p-2 text-white text-center">PRIVACY POLICY</h1>
          <p>
            <li>The EU's General Data Protection Regulation (GDPR)</li>
          </p>
          <p>
            <li>The California Consumer Privacy Act (CCPA)</li>
          </p>
          <p>
            <li>The California Online Privacy Protection Act (CalOPPA)</li>
          </p>
          <p>
            <li>China's Personal Information Protection Law (PIPL)</li>
          </p>

          <p>
            <li>Australia's Privacy Act of 1988</li>
          </p>
          <p>
            <li>Brazil's Lei Geral de Proteção de Dados (LGPD)</li>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
