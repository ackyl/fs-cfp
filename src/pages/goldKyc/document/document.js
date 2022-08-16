// Main Imports
import React, { useContext, useState } from "react";
import { Link } from "gatsby";

// Component Imports
import Layout from "@components/base/Layout";
import NavBar from "@components/patterns/NavBar";
import KycForm from "@components/patterns/KycForm";
import Modal from "@components/base/Modal";
import Dropdown from "@components/base/Dropdown";

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

  const ktpPhoto = location.state ? location.state.ktpPhoto : null;
  const selfiePhoto = location.state ? location.state.selfiePhoto : null;
  const disableButton = !(ktpPhoto && selfiePhoto);

  // Clear page state
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
        backUrl="../../verifyKtp"
        onClose={showModal}
      >
        Verify Your Identity
      </NavBar>

      {/* Content */}
      <KycForm title="Documents" disableButton={disableButton}>
        {/* KTP */}

        <div className="document">
          <Link to="../documentKtpPhoto">
            <p className="text-uiSmall">KTP Photo</p>
            <div className="document__row">
              <img src={ktpPhoto ? KtpImage : ThumbnailImage}></img>
              <div>
                <p className="text-uiSmall bold document__row-title">
                  Take KTP Photo
                </p>
                <p className="text-uiSmall">
                  So your application can be verified quickly.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Selfie */}
        {ktpPhoto && (
          <div className="document">
            <Link to="../documentKtpPhoto">
              <p className="text-uiSmall">Selfie</p>
              <div className="document__row">
                <img src={selfiePhoto ? SelfieImage : ThumbnailImage}></img>
                <div>
                  <p className="text-uiSmall bold document__row-title">
                    Take A Photo
                  </p>
                  <p className="text-uiSmall">
                    So your details can be verified quickly.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}

        <Dropdown options={["Single", "Married", "Divorce"]}></Dropdown>
      </KycForm>

      {/* Modal */}
      <Modal modal={modal} setModal={setModal}></Modal>
    </Layout>
  );
};

export default Document;
