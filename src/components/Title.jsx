import React from "react";

function Title() {
  console.log("Title is rendering...");
  return <div>Hello Title</div>;
}

export default React.memo(Title);
