import React from "react";

export default function Input(props) {
  return (
    <div className="my-5">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
        className={props.className||"border rounded py-2 px-3"}
        onChange={props.onChange}
        title={props.title}
        value={props.value}
        {...props.rest}
      />
    </div>
  );
}
