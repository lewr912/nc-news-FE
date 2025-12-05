import { NavLink, useNavigate } from "react-router-dom";

function BackButtonNavLink() {
  const navigate = useNavigate();

  function handleGoBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  return <NavLink onClick={handleGoBack}>Go Back</NavLink>;
}

export default BackButtonNavLink;
