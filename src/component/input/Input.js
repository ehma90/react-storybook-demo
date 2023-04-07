import React from 'react';
import "./Input.css"

function Input(props) {
    const {variant = "medium", ...rest} = props
  return (
    <>
      <input className={`input-size ${variant}`} {...rest}/>
    </>
  );
}

export default Input;
