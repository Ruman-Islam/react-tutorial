import React from "react";

function Button({ onUpdateCount, children }) {
  console.log(children + " " + "rendering...");
  return <button onClick={onUpdateCount}>{children}</button>;
}

export default React.memo(Button);
