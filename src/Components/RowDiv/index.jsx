export function RowDiv({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "red",
      }}
    >
      {children}
    </div>
  )
}
