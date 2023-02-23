import React from "react";
import { useSelector } from "react-redux";

function AlertComponent() {
  const message = useSelector((state: any) => state.message.message);
  return (
    message && (
      <div className="alert alert-primary" role="alert">
        {message}
      </div>
    )
  );
}

export default AlertComponent;
