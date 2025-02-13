import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import { FaRegCommentDots, FaPaperPlane, FaChevronLeft } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./assets/supportImage.PNG";
import { useNavigate } from "react-router-dom";



const Support = () => {
  const navigate  = useNavigate();
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to CoinPay support! How can we assist you today?", sender: "bot" },
    { text: "What is your question regarding?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Have you tried troubleshooting steps we provided in FAQ?", sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  function nextPage() {
    return ( 
    navigate("/home")
    );
}
  return (
    <div className="support">
      <div style={{marginBottom:"-70px"}} className="d-flex justify-content-center align-items-center py-3">
        <FaChevronLeft onClick={nextPage} className="position-absolute" style={{marginRight:"320px"}}></FaChevronLeft>
        <h1 className="h5 fw-semibold">Support</h1>
      </div>    
      <Container style={{background:" rgba(0, 0, 0, 0.0001)"}} className="d-flex justify-content-center align-items-center vh-100">
      {!chatStarted ? (
        <Card className=" text-center" style={{ width: "350px", border:"none",background:" rgba(0, 0, 0, 0.0001)"}}>
          <img src={image} alt="support" style={{border:"none",width:"250px",margin:"0px auto",background:" rgba(0, 0, 0, 0.0001)"}}/>
          <h1 className="h5 fw-semibold">CoinPay Support</h1>
          <p>Our dedicated team is here to assist you with any questions or issues related to our Coinpay mobile app</p>
          <Button variant="primary" className="w-100 mb-2 rounded-5 btn-lg"onClick={() => setChatStarted(true)}>
            <FaRegCommentDots className="me-2" /> Start Chat
          </Button>
          <Button variant="outline-primary" className="w-100 rounded-5 btn-lg">View FAQ</Button>
        </Card>
      ) : (
        <Card className="p-3" style={{ width: "350px", height: "500px", overflow: "hidden", border:"none",backgroundColor:"rgba(0, 0, 0, 0.0001)" }}>
          <div className="chat-box p-2 mb-2" style={{ flex: 1, overflowY: "auto", height: "400px" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"} mb-2`}
              >
                <span
                  className={`p-2 rounded ${msg.sender === "user" ? "bg-primary text-white" : "bg-light text-dark"}`}
                  style={{ maxWidth: "75%" }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {isTyping && <div className="text-muted small">Bot is typing...</div>}
          </div>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Type a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              style={{height:"50px",outline:"none", border:"none"}}
              className="rounded-5"
            />
            <Button variant="primary" style={{marginLeft:"280px", height:"50px", width:"50px"}} onClick={handleSendMessage} className="rounded-5 position-fixed">
              <FaPaperPlane />
            </Button>
          </div>
        </Card>
      )}
    </Container>
    </div>
  );
};

export default Support