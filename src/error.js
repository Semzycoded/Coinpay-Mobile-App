import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import errorImage from "../src/assets/notFound.PNG"; // Place the image inside your public or src folder

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Container className="text-center rounded bg-white" style={{ maxWidth: "400px" }}>
        <img src={errorImage} alt="404 Error" style={{width:"400px"}} className="img-fluid mb-4" />
        <h3 className="fw-bold">Error 404 <br/>Page Not Found </h3>
        <p className="text-muted">
          Oops! It looks like the page you're looking for doesn't exist or has been moved. 
          Please try again or go back to the home page.
        </p>
        <Button variant="primary" className="w-100 rounded-5 btn-lg mt-4" style={{}} onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
