import React from "react";
import { connect } from "react-redux";

function Home({ name, email }) {
  return (
    <>
      <h2>Home</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Home);
