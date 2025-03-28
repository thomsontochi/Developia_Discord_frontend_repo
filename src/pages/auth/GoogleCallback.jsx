import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Save the authorization code for backend processing
      localStorage.setItem("googleAuthCode", code);

      // Redirect to a dashboard or home page
      navigate("/");
    }
  }, [navigate]);

  return <p>Processing Google Sign-In...</p>;
}