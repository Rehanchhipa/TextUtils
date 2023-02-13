import React from "react";

export default function Alert(props) {
    const capatilize = (word) => {
        const sent = word.toLowerCase();
        return sent.charAt(0).toUpperCase() + sent.slice(1);
    }
  return (
    <div style={{height: "40px"}}>
    {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
      <strong>{capatilize(props.alert.typ)}</strong> {props.alert.msg}
    </div>}
    </div>
  );
}
