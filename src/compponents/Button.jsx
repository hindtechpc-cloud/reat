import React from "react";

export default function Button(props) {
  return (
    <button className="border bg-blue-500 px-3 py-2 rounded-lg" {...props.rest}>
     {props.children}
    </button>
  );
}
