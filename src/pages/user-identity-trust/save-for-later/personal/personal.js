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

// Main Render
const Personal = () => {
  const { context, saveContext } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [formState, setFormState] = useState(
    context.userIdentityTrust.saveForLater.personal
  );

  // Check whether or not the properties of formState is all filled
  const enableButton = Object.values(formState).every(
    (x) => !(x === null || x === "")
  );

  const enableFullAddressButton = Object.values(formState.address).every(
    (x) => !(x === null || x === "")
  );

  const [fullAddress, setFullAddress] = useState(
    enableFullAddressButton
      ? `${formState.address.address}, ${formState.address.rtrw}, ${formState.address.province}, ${formState.address.city}, ${formState.address.postalCode}`
      : null
  );

  // Save data to form state based on input id, onChange
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
    context.userIdentityTrust.saveForLater.personal = formState;
    context.userIdentityTrust.saveForLater.savedUntilPage = 4;
    saveContext({
      ...context,
    });
  };

  const closePopUpWindow = () => {
    console.log(formState);
    setFullAddress(
      `${formState.address.address}, ${formState.address.rtrw}, ${formState.address.province}, ${formState.address.city}, ${formState.address.postalCode}`
    );
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
          defaultValue={
            context.userIdentityTrust.saveForLater.document.fullName
          }
          disabled
        ></Input>
        <Input
          id="email"
          label="Email Address"
          defaultValue={context.userIdentityTrust.saveForLater.contact.email}
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
          <img src="/images/active.png" alt="" />
          <p className="text-uiBaseline">Same with my current address</p>
        </div>

        <Input
          id="mothersName"
          label="Mother's Full Name"
          defaultValue={
            context.userIdentityTrust.saveForLater.personal.mothersName
          }
          onChange={onInputFilled}
        ></Input>

        <Dropdown
          id="maritalStatus"
          label="Marital Status"
          defaultValue={
            context.userIdentityTrust.saveForLater.personal.maritalStatus
          }
          options={["Single", "Married", "Widowed", "Divorced"]}
          onDropdownSelected={onDropdownSelected}
        ></Dropdown>
      </KycForm>

      {/* Pop Up Window */}
      <PopUpWindow
        isActive={popup}
        onClose={closePopUpWindow}
        enableButton={enableFullAddressButton}
      >
        <div className="personal-address">
          <Input
            id="-address"
            label="Address"
            defaultValue={
              context.userIdentityTrust.saveForLater.personal.address.address
            }
            footer="Please include street name and number"
            onChange={onInputFilled}
          ></Input>
          <Input
            id="-rtrw"
            label="RT/RW"
            defaultValue={
              context.userIdentityTrust.saveForLater.personal.address.rtrw
            }
            onChange={onInputFilled}
          ></Input>
          <div className="personal-address__row">
            <FullDropdown
              id="-province"
              label="Province"
              defaultValue={
                context.userIdentityTrust.saveForLater.personal.address.province
              }
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
              defaultValue={
                context.userIdentityTrust.saveForLater.personal.address.city
              }
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
            defaultValue={
              context.userIdentityTrust.saveForLater.personal.address.postalCode
            }
            onChange={onInputFilled}
          ></Input>
        </div>
      </PopUpWindow>

      {/* Modal */}
      <Modal
        modal={modal}
        setModal={setModal}
        savePage={3}
        formState={formState}
      ></Modal>
    </Layout>
  );
};

export default Personal;
