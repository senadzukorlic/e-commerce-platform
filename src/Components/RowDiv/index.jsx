export function RowDiv({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingLeft: "20px",
      }}
    >
      {children}
    </div>
  )
}
