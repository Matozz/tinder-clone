import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    //BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon_back" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header_icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="./">
        <div className="header_logo">
          <svg
            enable-background="new 0 0 24 24"
            height="50"
            viewBox="0 0 24 24"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12.636 0c.828.633 3.567 3.326 5.444 6.287 1.303 2.056 2.305 4.33 2.75 6.731.33 1.769.39 4.005-.156 5.643-1.177 3.649-3.516 4.965-7.288 5.276-8.955.666-12.554-4.655-9.26-11.73 1.272-2.709 3.663-5.535 3.941-5.702-.026 1.375.287 2.614 1.173 3.68.025.031.044.075.09.081 1.995-1.498 3.458-3.193 3.839-5.692.238-1.535.033-3.131-.533-4.574z"
              fill="#ec407a"
            />
          </svg>
        </div>
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header_icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
