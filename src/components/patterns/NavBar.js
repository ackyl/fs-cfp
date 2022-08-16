// Main Imports
import React from "react";
import { Link } from "gatsby";

// Image Imports
import BackIcon from "@images/icons/back.svg";
import CloseIcon from "@images/icons/close.svg";
import LockIcon from "@images/icons/lock.svg";

// Main Render
const NavBar = ({
  isNotice,
  isBack,
  isClose,
  backUrl,
  onClose,
  step,
  children,
}) => {
  const showClose = isClose ? isClose : "true";
  const stepProgress = `${(step / 9) * 100}%`;

  const stepBar = (
    <div className="navbar__step-bar" style={{ width: stepProgress }}></div>
  );

  const closeRender = () => {
    if (showClose) {
      if (onClose) {
        return (
          <a onClick={onClose}>
            <img src={CloseIcon}></img>
          </a>
        );
      } else {
        return (
          <Link to="/">
            <img src={CloseIcon}></img>
          </Link>
        );
      }
    }
  };

  return (
    <div className={`navbar ${isNotice && "navbar__padding"}`}>
      {/* Title Section */}
      <div className="navbar__header">
        {isBack && (
          <Link to={backUrl}>
            <img src={BackIcon}></img>
          </Link>
        )}
        <p className="text-title2">{children}</p>
        {closeRender()}
      </div>

      {/* Step Section */}
      {step && (
        <div className="navbar__step">
          <div className="navbar__step-background">{stepBar}</div>
          <p className="text-captionTiny">Step 1 of 9</p>
        </div>
      )}

      {/* Notice Section */}
      {isNotice && (
        <div className={`navbar__notice`}>
          <img src={LockIcon}></img>
          <p className="text-uiTiny">
            All details are encrypted to protect your privacy.
          </p>
        </div>
      )}
    </div>
  );
};

export default NavBar;

// Context
/*
  isNotice -> to show additional notice div
  isBack -> to show back button on the left
  isClose -> to show close button on the right
  backUrl -> to provide link to back
  step -> to provide step below title
*/
