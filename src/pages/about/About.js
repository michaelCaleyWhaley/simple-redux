import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { updateName, updateEmail } from "../../redux/actions";

function About({ name, email, dispatchUpdateName, dispatchUpdateEmail }) {
  const history = useHistory();
  function historyGoBack() {
    history.goBack();
  }

  return (
    <>
      <h1>About</h1>
      <form>
        <label>
          Name:
          <input
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
