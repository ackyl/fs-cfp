import React, { useContext, useState } from "react";
import { Link } from "gatsby";

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
const DocumentReviewKtp = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const [closeModal, setCloseModal] = useState(false);
  const [formState, setFormState] = useState({
    fullName: "",
    gender: "",
    religion: "",
    birthPlace: "",
    birthDate: "",
  });

  const isFormFilled = Object.values(formState).every(
    (x) => !(x === null || x === "")
  );

  const onInputFilled = (event) => {
    saveFormState(event.target.id, event.target.value);
  };

  const onDropdownSelected = (id, value) => {
    saveFormState(id, value);
  };

  const saveFormState = (id, value) => {
    formState[id] = value;
    setFormState({
      ...formState,
    });
  };

  // Activate Close Modal
  const showCloseModal = () => {
    setCloseModal(true);
  };

  return (
    <Layout className="documentReviewKtp__bg">
      {/* NavBar */}
      <NavBar
        isBack={true}
        backUrl="../documentKtpPhoto"
        onClose={showCloseModal}
      >
        Review Your Details
      </NavBar>

      {/* Content */}
      <div className="documentReviewKtp">
        <img src={KtpDummy} className="documentReviewKtp__image"></img>
        <p className="text-uiSmall">
          Please review your KTP Details and edit if incorrect
        </p>
        <div className="documentReviewKtp__form">
          <Input
            id="fullName"
            label="Full Name"
            onChange={onInputFilled}
          ></Input>
          <Dropdown
            id="gender"
            label="Gender"
            options={["Male", "Female"]}
            onDropdownSelected={onDropdownSelected}
          ></Dropdown>
          <Dropdown
            id="religion"
            label="Religion"
            options={["Islam", "Christian", "Budhha"]}
            onDropdownSelected={onDropdownSelected}
          ></Dropdown>
          <Input
            id="birthPlace"
            label="Place of Birth"
            onChange={onInputFilled}
          ></Input>
          <Input
            id="birthDate"
            label="Date of Birth"
            onChange={onInputFilled}
          ></Input>
        </div>
      </div>

      {/* Button */}
      <div className="documentReviewKtp__buttons">
        <Button
          type={!isFormFilled ? "disabled" : "secondary"}
          className="documentReviewKtp__button"
          toPage="../documentKtpPhoto"
        >
          Retake Photo
        </Button>
        <Button
          type={!isFormFilled ? "disabled" : "primary"}
          className="documentReviewKtp__button"
          toPage="../document"
          state={{ ktpPhoto: true }}
        >
          Save Photo Details
        </Button>
      </div>

      {/* Modal */}
      <Modal modal={closeModal} setModal={setCloseModal}></Modal>
    </Layout>
  );
};

export default DocumentReviewKtp;
