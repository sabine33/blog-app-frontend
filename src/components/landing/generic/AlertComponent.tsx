import React, { useEffect } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { useSelector } from "react-redux";
import { MessageType } from "../../../types";
import { useAlert } from "react-alert";
import { toast } from "react-hot-toast";
function AlertComponent() {
  const { message } = useSelector((state: any) => state.message);
  const alert = useAlert();

  useEffect(() => {
    if (message && message.content) {
    }
  }, [message]);

  return (
    message &&
    message.content &&
    (message.type == "notification" ? (
      <div className="alert alert-primary" role="alert">
        {message.content}
      </div>
    ) : (
      <div className="alert alert-danger" role="alert">
        {message.content}
      </div>
    ))
  );
}

export default AlertComponent;
