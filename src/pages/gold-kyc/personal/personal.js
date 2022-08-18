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
const Personal = () => {
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
    context.kyc.contact = formState;
    saveContext({
      ...context,
    });
    console.log(context);
  };

  return (
    <Layout>
      {/* NavBar */}
      <NavBar
        isNotice={true}
        isBack={true}
        backUrl="../../contact/contact"
        onClose={showModal}
        step={3}
      >
        Enter Your Personal Data
      </NavBar>

      {/* Content */}
      <KycForm
        title="Basic Information"
        subtitle="Some fields might be prefilled based on your registered account."
        disableButton={!enableButton}
        onClick={setContext}
      >
        <Input
          id="fullName"
          label="Full Name"
          defaultValue={context.kyc.document.fullName}
          disabled
        ></Input>
        <Input
          id="email"
          label="Email Address"
          defaultValue={context.kyc.contact.email}
          disabled
        ></Input>
      </KycForm>

      {/* Modal */}
      <Modal modal={modal} setModal={setModal}></Modal>
    </Layout>
  );
};

export default Personal;
