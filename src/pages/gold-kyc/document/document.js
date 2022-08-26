// Main Imports
import React, { useContext, useState } from "react";
import { Link } from "gatsby";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import KycForm from "@components/patterns/KycForm";
import Modal from "@components/base/Modal";

// Context Import
import { GlobalContext } from "@context/global-context";

// Image Import
import ThumbnailImage from "@images/photoThumbnail.png";
import KtpImage from "@images/ktpDummy.png";
import SelfieImage from "@images/selfieDummy.png";

// Main Render
const Document = ({ location }) => {
  const { context, saveContext } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);

  // Get the state of the page from state
  let isKtpDone = false;
  let isSelfieDone = false;

  if (context.kyc.document.fullName !== "") {
    isKtpDone = true;
    if (context.kyc.selfie) {
      isSelfieDone = true;
    }
  }

  const disableButton = !(isKtpDone && isSelfieDone);

  // Save selfie status
  const saveSelfie = () => {
    context.kyc.selfie = true;
    context.kyc.savedUntilPage = 2;
    saveContext({
      ...context,
    });
  };

  // Clear page state, if not it will persist
  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    window.history.replaceState(null, "");
  }

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
        backUrl="../../verify-ktp"
        onClose={showModal}
        step={1}
      >
        Upload Your Documents
      </NavBar>

      {/* Content */}
      <KycForm
        title="Documents"
        disableButton={disableButton}
        toPage="../../contact/contact"
        onClick={saveSelfie}
      >
        {/* KTP */}

        <div className="document">
          <Link to="../document-photo">
            <p className="text-uiSmall">KTP Photo</p>
            <div className="document__row">
              <img src={isKtpDone ? KtpImage : ThumbnailImage} alt=""></img>
              <div>
                <p className="text-uiSmall bold document__row-title">
                  {isKtpDone ? "KTP Photo Uploaded" : "Take KTP Photo"}
                </p>
                <p className="text-uiSmall">
                  {isKtpDone
                    ? "Your details will be saved for verification purposes."
                    : "So we can verify your application."}
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Selfie */}
        {isKtpDone && (
          <div className="document">
            <Link to="../document-photo" state={{ selfie: true }}>
              <p className="text-uiSmall">Selfie</p>
              <div className="document__row">
                <img
                  src={isSelfieDone ? SelfieImage : ThumbnailImage}
                  alt=""
                ></img>
                <div>
                  <p className="text-uiSmall bold document__row-title">
                    {isSelfieDone ? "Selfie Uploaded" : "Take a Selfie"}
                  </p>
                  <p className="text-uiSmall">
                    {isSelfieDone
                      ? "Your photo will be saved for verification purposes."
                      : "So we can make sure that the applicant is really you."}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}
      </KycForm>

      {/* Modal */}
      <Modal modal={modal} setModal={setModal} savePage={1}></Modal>
    </Layout>
  );
};

export default Document;
