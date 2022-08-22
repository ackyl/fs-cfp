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
  const [formState, setFormState] = useState({
    email: context.kyc.contact.email,
    phone: context.kyc.contact.phone,
  });

  // Check whether or not the properties of formState is all filled
  const enableButton = Object.values(formState).every(
    (x) => !(x === null || x === "")
  );

  // Save data to form state based on input id
  const saveFormState = (id, value) => {
    formState[id] = value;
    setFormState({
      ...formState,
    });
  };

  // On input value changed, save it to formState
  const onInputFilled = (event) => {
    saveFormState(event.target.id, event.target.value);
  };

  // Activate Modal
  const showModal = () => {
    setModal(true);
  };

  // Set context when going to the next page
  const setContext = () => {
    context.kyc.contact.phone = "+62" + context.kyc.contact.phone;
    context.kyc.contact = formState;
    context.kyc.savedUntilPage = 3;
    saveContext({
      ...context,
    });
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
      <KycForm
        title="Documents"
        disableButton={!enableButton}
        onClick={setContext}
        toPage="../../personal/personal"
      >
        <Input
          id="email"
          label="Email Address"
          defaultValue={formState.email}
          onChange={onInputFilled}
        ></Input>
        <div className="contact">
          <Input
            id="cc"
            label="Country Code"
            defaultValue="       +62"
            disabled
            flag
          ></Input>
          <Input
            id="phone"
            label="Mobile Number"
            defaultValue={formState.phone.replace("+62", "")}
            onChange={onInputFilled}
          ></Input>
        </div>
        <p className="text-uiSmall contact-footer">
          Please enter an active phone number for OTP verification
        </p>
      </KycForm>

      {/* Modal */}
      <Modal modal={modal} setModal={setModal} savePage={2}></Modal>
    </Layout>
  );
};

export default Contact;
