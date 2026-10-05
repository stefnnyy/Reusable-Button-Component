import React from "react";
import "./Button.css";

export default function Button({
  variant,
  destructive,
  leadingIcon,
  trailingIcon,
  children,
}) {
  const buttonClass = [
    "button",
    `button--${variant}`,
    destructive ? "button--destructive" : "",
  ].join(" ");

  return (
    <button className={buttonClass}>
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

// export default function Button({
//   variant,
//   state,
//   leadingIcon,
//   trailingIcon,
//   children,
// }) {
//   return <button className={`button button--${variant}`}>{children}</button>;
// }
