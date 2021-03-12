import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateName, updateEmail } from "../../redux/actions";

import "./About.css";

function About({ name, email, dispatchUpdateName, dispatchUpdateEmail }) {
  const history = useHistory();
  function historyGoBack() {
    history.goBack();
  }

  const [h1Colour, setH1Colour] = useState(false);

  return (
    <>
      <h1
        data-testid="about-heading"
        className={h1Colour ? "heading" : "heading--alt"}
        onClick={() => {
          setH1Colour(!h1Colour);
        }}
      >
        About
      </h1>
      <form>
        <label>
          Name:
          <input
            data-testid="about-input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              dispatchUpdateName(e.target.value);
            }}
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              dispatchUpdateEmail(e.target.value);
            }}
          />
        </label>
      </form>
      <button type="button" onClick={historyGoBack}>
        Back
      </button>
    </>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateName: (text) => {
    dispatch(updateName(text));
  },
  dispatchUpdateEmail: (text) => {
    dispatch(updateEmail(text));
  },
});

export { About };
export default connect(mapStateToProps, mapDispatchToProps)(About);
