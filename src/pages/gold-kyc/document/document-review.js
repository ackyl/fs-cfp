import React, { useContext, useState } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import Input from "@components/base/Input";
import Dropdown from "@components/base/Dropdown";
import Modal from "@components/base/Modal";
import Button from "@components/base/Button";

// Context Import
import { GlobalContext } from "@context/global-context";

// Image Import
import KtpDummy from "@images/ktpDummy.png";

// Main Render
const DocumentReview = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const [closeModal, setCloseModal] = useState(false);
  const [formState, setFormState] = useState({
    fullName: context.goldKyc.document.fullName,
    gender: context.goldKyc.document.gender,
    religion: context.goldKyc.document.religion,
    birthPlace: context.goldKyc.document.birthPlace,
    birthDate: context.goldKyc.document.birthDate,
  });

  // Save context
  const setContext = () => {
    context.goldKyc.document = formState;
    saveContext({
      ...context,
    });
  };

  // Check whether or not the properties of formState is all filled
  const isFormFilled = Object.values(formState).every(
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

  // On dropdown selected, save it to formState
  const onDropdownSelected = (id, value) => {
    saveFormState(id, value);
  };

  // Activate Close Modal
  const showCloseModal = () => {
    setCloseModal(true);
  };

  return (
    <Layout className="documentReview__bg">
      {/* NavBar */}
      <NavBar
        isBack={true}
        backUrl="../document-photo"
        onClose={showCloseModal}
      >
        Review Your Details
      </NavBar>

      {/* Content */}
      <div className="documentReview">
        <img src={KtpDummy} className="documentReview__image" alt=""></img>
        <p className="text-uiSmall">
          Please review your KTP Details and edit if incorrect
        </p>
        <div className="documentReview__form">
          <Input
            id="fullName"
            label="Full Name"
            defaultValue={formState.fullName}
            onChange={onInputFilled}
          ></Input>
          <Dropdown
            id="gender"
            label="Gender"
            options={["Male", "Female"]}
            defaultValue={formState.gender}
            onDropdownSelected={onDropdownSelected}
          ></Dropdown>
          <Dropdown
            id="religion"
            label="Religion"
            defaultValue={formState.religion}
            options={["Islam", "Christian", "Budhha"]}
            onDropdownSelected={onDropdownSelected}
          ></Dropdown>
          <Input
            id="birthPlace"
            label="Place of Birth"
            defaultValue={formState.birthPlace}
            onChange={onInputFilled}
          ></Input>
          <Input
            id="birthDate"
            label="Date of Birth"
            defaultValue={formState.birthDate}
            onChange={onInputFilled}
          ></Input>
        </div>
      </div>

      {/* Button */}
      <div className="documentReview__buttons">
        <Button
          type={!isFormFilled ? "disabled" : "secondary"}
          className="documentReview__button"
          toPage="../document-photo"
        >
          Retake Photo
        </Button>
        <Button
          type={!isFormFilled ? "disabled" : "primary"}
          className="documentReview__button"
          toPage="../document"
          onClick={() => setContext()}
        >
          Save Photo Details
        </Button>
      </div>

      {/* Modal */}
      <Modal modal={closeModal} setModal={setCloseModal}></Modal>
    </Layout>
  );
};

export default DocumentReview;
