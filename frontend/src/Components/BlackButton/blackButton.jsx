import { StyleButton } from "./styleBlackButton"

export function BlackButton({
  width,
  buttonName,
  type,
  onClick,

  onSubmit,
}) {
  return (
    <>
      <StyleButton
        style={width}
        type={type}
        onClick={onClick}
        onSubmit={onSubmit}
      >
        {buttonName}
      </StyleButton>
    </>
  )
}
