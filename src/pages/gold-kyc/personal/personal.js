// Main Imports
import React, { useContext, useState } from "react";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import KycForm from "@components/patterns/KycForm";
import Modal from "@components/base/Modal";
import Input from "@components/base/Input";
import PopUpWindow from "@components/base/PopUpWindow";
import Dropdown from "@components/base/Dropdown";
import FullDropdown from "@components/base/FullDropdown";

// Context Import
import { GlobalContext } from "@context/global-context";

// Image Import
import ActiveImage from "@images/active.png";

// Main Render
const Personal = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [formState, setFormState] = useState({
    address: {
      address: "",
      rtrw: "",
      province: "",
      city: "",
      postalCode: "",
    },
    mothersName: "",
    maritalStatus: "",
  });

  const fullAddress =
    formState.address.address +
    formState.address.rtrw +
    formState.address.province +
    formState.address.city +
    formState.address.postalCode;

  // Check whether or not the properties of formState is all filled
  const enableButton = Object.values(formState).every(
    (x) => !(x === null || x === "")
  );

  // Save data to form state based on input id
  const saveFormState = (id, value) => {
    if (id.includes("-")) {
      formState["address"][id.replace("-", "")] = value;
    } else {
      formState[id] = value;
    }
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
  };

  const closePopUpWindow = () => {
    setPopup(false);
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
        toPage="../../complete"
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

        {/* Full Address */}
        <Input
          id="fullAddress"
          label="Address"
          defaultValue={fullAddress}
          onClick={() => setPopup(true)}
          disabled
          footer="Based on your KTP"
        ></Input>

        <div className="personal-same">
          <img src={ActiveImage}></img>
          <p className="text-uiBaseline">Same with my current address</p>
        </div>

        <Input
          id="mothersName"
          label="Mother's Full Name"
          defaultValue={context.kyc.personal.mothersName}
          onChange={onInputFilled}
        ></Input>

        <Dropdown
          id="maritalStatus"
          label="Marital Status"
          defaultValue={context.kyc.personal.maritalStatus}
          options={["Single", "Married", "Widowed", "Divorced"]}
          onDropdownSelected={onDropdownSelected}
        ></Dropdown>
      </KycForm>

      {/* Pop Up Window */}
      <PopUpWindow isActive={popup} onClose={closePopUpWindow}>
        <div className="personal-address">
          <Input
            id="-address"
            label="Address"
            defaultValue={context.kyc.personal.address.address}
            footer="Please include street name and number"
            onChange={onInputFilled}
          ></Input>
          <Input
            id="-rtrw"
            label="RT/RW"
            defaultValue={context.kyc.personal.address.rtrw}
            onChange={onInputFilled}
          ></Input>
          <div className="personal-address__row">
            <FullDropdown
              id="-province"
              label="Province"
              defaultValue={context.kyc.personal.address.province}
              options={[
                {
                  header: "J",
                  contents: ["Jakata"],
                },
              ]}
              onDropdownSelected={onDropdownSelected}
            ></FullDropdown>
            <FullDropdown
              id="-city"
              label="City"
              defaultValue={context.kyc.personal.address.city}
              options={[
                {
                  header: "J",
                  contents: ["Jakata Barat", "Jakarta Pusat"],
                },
              ]}
              onDropdownSelected={onDropdownSelected}
            ></FullDropdown>
          </div>
          <Input
            id="-postalCode"
            label="Postal Code"
            defaultValue={context.kyc.personal.address.postalCode}
            onChange={onInputFilled}
          ></Input>
        </div>
      </PopUpWindow>

      {/* Modal */}
      <Modal modal={modal} setModal={setModal}></Modal>
    </Layout>
  );
};

export default Personal;
