import React from "react";

function Count2({ count, title }) {
  console.log("Count 2 is rendering...");
  return (
    <div>
      {title} is {count}
    </div>
  );
}

export default React.memo(Count2);
