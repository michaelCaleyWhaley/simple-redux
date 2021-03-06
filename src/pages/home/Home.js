import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Home({ name, email }) {
  return (
    <>
      <h1>Home</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button type="button">
        <Link to="/about">About</Link>
      </button>
    </>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Home);
