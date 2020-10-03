import React from "react";
import { connect } from "react-redux";
import { updateName, updateEmail } from "./redux/actions";

function About({ name, email, dispatchUpdateName, dispatchUpdateEmail }) {
  return (
    <>
      <h2>About</h2>
      <form>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            dispatchUpdateName(e.target.value);
          }}
        />

        <br />

        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            dispatchUpdateEmail(e.target.value);
          }}
        />
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
