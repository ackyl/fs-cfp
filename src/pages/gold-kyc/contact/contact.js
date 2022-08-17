// Main Imports
import React, { useContext, useState } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import KycForm from "@components/patterns/KycForm";
import Modal from "@components/base/Modal";
import Input from "@components/base/Input";

// Context Import
import { GlobalContext } from "@context/global-context";

// Image Import

// Main Render
const Contact = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);

  const disableButton = true;

  // Activate Modal
  const showModal = () => {
    setModal(true);
  };

  return (
    <Layout>
      {/* NavBar */}
      <NavBar
        isNotice={true}
        isBack={true}
        backUrl="../../document/document"
        onClose={showModal}
        step={2}
      >
        Contact Details
      </NavBar>

      {/* Content */}
      <KycForm title="Documents" disableButton={disableButton}>
        <Input id="email" label="Email Address" defaultValue=""></Input>
        <div className="contact">
          <Input
            id="cc"
            label="Country Code"
            defaultValue="       +62"
            disabled
            flag
          ></Input>
          <Input id="phone" label="Mobile Number" defaultValue=""></Input>
        </div>
        <p className="text-uiSmall contact-footer">
          Please enter an active phone number for OTP verification
        </p>
      </KycForm>

      {/* Modal */}
      <Modal modal={modal} setModal={setModal}></Modal>
    </Layout>
  );
};

export default Contact;
