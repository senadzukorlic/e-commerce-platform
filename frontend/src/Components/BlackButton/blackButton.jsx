import { StyleButton } from "./styleBlackButton"
import { Link } from "react-router-dom"

export function BlackButton({
  width,
  buttonName,
  type,
  onClick,
  onSubmit,
  to,
}) {
  return (
    <>
      {to ? (
        <Link to={to} style={{ textDecoration: "none" }}>
          <StyleButton
            style={width}
            type={type}
            onClick={onClick}
            onSubmit={onSubmit}
          >
            {buttonName}
          </StyleButton>
        </Link>
      ) : (
        <StyleButton
          style={width}
          type={type}
          onClick={onClick}
          onSubmit={onSubmit}
        >
          {buttonName}
        </StyleButton>
      )}
    </>
  )
}
