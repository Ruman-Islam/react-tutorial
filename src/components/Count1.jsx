import React from "react";

function Count1({ count, title }) {
  console.log("Count 1 is rendering...");
  return (
    <div>
      {title} is {count}
    </div>
  );
}

export default React.memo(Count1);
