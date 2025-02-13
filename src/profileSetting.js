import React, { useState } from "react";
import bank from "./icons/bank.svg";
import { ListGroup, Form } from "react-bootstrap";
import { FaMoon, FaUser, FaExchangeAlt, FaCog, FaLock, FaChevronRight } from "react-icons/fa";

function ProfileSettings() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="my-3" style={{ width: "92vw", marginLeft: "15px", background: "white", borderRadius: "7px" }}>
      <ListGroup className="rounded-3">
        {/* Dark Mode */}
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="my-2 d-flex align-items-center">
            <div className="icon-wrapper bg-secondary">
              <FaMoon className="text-dark" />
            </div>
            <span>Dark Mode</span>
          </div>
          <Form.Check type="switch" id="dark-mode-toggle" checked={darkMode} onChange={toggleDarkMode} />
        </ListGroup.Item>

        {/* Personal Info */}
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="my-2 d-flex align-items-center">
            <div className="icon-wrapper bg-primary">
              <FaUser className="text-white" />
            </div>
            <span>Personal Info</span>
          </div>
          <FaChevronRight className="transactionArrow" />
        </ListGroup.Item>

        {/* Bank & Cards */}
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="my-2 d-flex align-items-center">
            <div className="icon-wrapper" style={{ backgroundColor: "#f4ecc2" }}>
              <img src={bank} alt="Bank" className="icon-img" />
            </div>
            <span>Bank & Cards</span>
          </div>
          <FaChevronRight className="transactionArrow" />
        </ListGroup.Item>

        {/* Transaction */}
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="my-2 d-flex align-items-center">
            <div className="icon-wrapper bg-danger">
              <FaExchangeAlt className="text-white" />
            </div>
            <span>Transaction</span>
          </div>
          <FaChevronRight className="transactionArrow" />
        </ListGroup.Item>

        {/* Settings */}
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="my-2 d-flex align-items-center">
            <div className="icon-wrapper bg-primary">
              <FaCog className="text-white" />
            </div>
            <span>Settings</span>
          </div>
          <FaChevronRight className="transactionArrow" />
        </ListGroup.Item>

        {/* Data Privacy */}
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <div className="my-2 d-flex align-items-center">
            <div className="icon-wrapper bg-success">
              <FaLock className="text-white" />
            </div>
            <span>Data Privacy</span>
          </div>
          <FaChevronRight className="transactionArrow" />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ProfileSettings;
