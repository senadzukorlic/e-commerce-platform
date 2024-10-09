import { StyleButton } from "./styleBlackButton"

export function BlackButton({ width, buttonName, type, onClick }) {
  return (
    <>
      <StyleButton style={width} type={type} onClick={onClick}>
        {buttonName}
      </StyleButton>
    </>
  )
}
