import React, { useState } from "react";
import { ProgressBar, Button, Container } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp2 = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isVerifying, setIsVerifying] = useState(false);

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview Image
      startVerification();
    }
  };

  // Simulate ID Verification Process
  const startVerification = () => {
    setIsVerifying(true);
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 10;
      setProgress(progressValue);

      if (progressValue >= 100) {
        clearInterval(interval);
        setIsVerifying(false);
        alert("ID Verification Successful ✅");
        navigate("/SignUp3");
      }
    }, 500);
  };

  return (
    <Container className="text-center" style={{ color: "white", background: "black" }}>
      <div
        style={{ background: "black", padding: "0px", margin: "0px" }}
        className="d-flex flex-column align-items-center justify-content-center vh-100 rounded"
      >
        {/* Back Arrow */}
        <div className="w-100 text-start" style={{ background: "black", padding: "0px", marginTop: "-250px" }}>
          <Button variant="link" className="text-light" onClick={() => window.history.back()}>
            <FaChevronLeft className="position-absolute" style={{ marginRight: "320px" }} />
          </Button>
        </div>

        {/* Page Title */}
        <h5 style={{ marginTop: "-10px" }}>1/2</h5>
        <p>Please scan front of your ID card</p>

        {/* ID Image Placeholder */}
        <div
          className="id-container my-3"
          style={{ border: "2px dashed gray", padding: "20px", borderRadius: "10px" }}
        >
          {image ? (
            <img src={image} alt="ID Preview" style={{ width: "100%", borderRadius: "10px" }} />
          ) : (
            <label className="btn btn-outline-light">
              <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
              📷 Upload ID
            </label>
          )}
        </div>

        {/* Verification Progress */}
        <h1>
          ID verification <br /> in progress
        </h1>
        <p>Hold tight, it won’t take long</p>
        <ProgressBar now={progress} animated className="w-100 mb-3" />

        {/* Hidden Input for File Upload */}
        {isVerifying ? null : (
          <Button variant="primary" onClick={() => document.querySelector('input[type="file"]').click()}>
            Scan Another ID
          </Button>
        )}
      </div>
    </Container>
  );
};

export default SignUp2;
