import ProfileImage from "./profileImage";
import ProfileSettings from "./profileSetting";
import { FaChevronLeft } from "react-icons/fa";

function Profile() {
  return (
   <>
    <div className="profile">
      <div className="d-flex justify-content-center align-items-center py-3">
        <FaChevronLeft className="position-absolute" style={{marginRight:"320px"}}></FaChevronLeft>
        <h1 className="h5 fw-semibold">My Profile</h1>
      </div>
      <div><ProfileImage/></div>
      <div><ProfileSettings/></div>
    </div>
   </>
  );
}

export default Profile;
