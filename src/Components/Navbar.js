import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <h1 className="title">Weather App</h1>

      <form
        className="region"
        onSubmit={(e) => {
          props.changeLocation(e);
        }}
      >
        <input
          type="text"
          className="regioninput"
          placeholder="Select your region"
          onChange={(e) => {
            props.changeRegion(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
