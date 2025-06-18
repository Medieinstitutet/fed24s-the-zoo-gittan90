import React from "react";

interface Props {
  status: "mätt" | "hungrig" | "desperat";
}

const StatusTag = ({ status }: Props) => {
  let color = "";

  switch (status) {
    case "mätt":
      color = "green";
      break;
    case "hungrig":
      color = "orange";
      break;
    case "desperat":
      color = "red";
      break;
  }

  return (
    <span style={{ color, fontWeight: "bold" }}>{status.toUpperCase()}</span>
  );
};

export default StatusTag;
