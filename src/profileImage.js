import { useState, useRef } from "react";
import { FaEdit } from "react-icons/fa";

function ProfileImage() {
  const [profileImage, setProfileImage] = useState("https://placehold.co/80x80");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Adeoye Semilore");
  const [email, setEmail] = useState("adeoyesemilore2007@gmail.com");
  const [phone, setPhone] = useState("+2348136151937");

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save to database or API here if needed
  };

  return (
    <div className="container mt-3">
      <div className="card shadow p-3">
        <div className="position-relative text-center">
          <img
            className="rounded-circle"
            style={{ width: "80px", height: "80px", cursor: "pointer" }}
            src={profileImage}
            alt="Profile"
            title="Click to change profile picture"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            ref={fileInputRef}
            className="d-none"
            accept="image/*"
            onChange={handleImageChange}
          />
          <FaEdit
            className="text-secondary position-absolute"
            style={{ cursor: "pointer", top: "10px", right: "10px" }}
            onClick={handleEditClick}
          />
        </div>

        <div className="text-center mt-3">
          {isEditing ? (
            <>
              <input
                type="text"
                className="form-control mb-2 border-primary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="form-control mb-2 border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                className="form-control mb-2 border-primary"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h2 className="h6 fw-semibold">{name}</h2>
              <p className="text-muted">{email}</p>
              <p className="text-muted">{phone}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileImage;
