import { StyleButton } from "./style"

export function OutlinedButton({ width, buttonName, type, onClick }) {
  return (
    <>
      <StyleButton style={width} type={type} onClick={onClick}>
        {buttonName}
      </StyleButton>
    </>
  )
}
