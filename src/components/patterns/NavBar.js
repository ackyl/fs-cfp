// Main Imports
import React from "react";
import { Link } from "gatsby";

// Image Imports
import BackIcon from "@images/icons/back.svg";
import CloseIcon from "@images/icons/close.svg";
import LockIcon from "@images/icons/lock.svg";

// Main Render
const NavBar = ({ isNotice, isBack, isClose, backUrl, children }) => {
  const showClose = isClose ? isClose : "true";

  return (
    <div className={`navbar ${isNotice && "navbar__padding"}`}>
      <div className="navbar__header">
        {isBack && (
          <Link to={backUrl}>
            <img src={BackIcon}></img>
          </Link>
        )}
        <p className="text-title3">{children}</p>
        {showClose && (
          <Link to="/">
            <img src={CloseIcon}></img>
          </Link>
        )}
      </div>
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
*/
