import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({
  cssClass,
  children,
  handleClick,
  type = "primary",
}) => {
    
  return (
    <Button variant={type} onClick={handleClick} className={cssClass}>
      {children}
    </Button>
  );
};

export default CustomButton;
