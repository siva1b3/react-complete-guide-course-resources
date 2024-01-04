import React from "react";

function Root(props) {
  const { children } = props;
  return (
    <>
      <div id="modal" />
      <div id="content">
        <header>
          <h1>
            The
            <em>Almost</em>
            Final Countdown
          </h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <div id="root1">{children}</div>
      </div>
    </>
  );
}

export default Root;
