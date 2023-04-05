import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <br></br>
      <input ref={ref} {...props} />
    </>
  );
});
export default Input;
