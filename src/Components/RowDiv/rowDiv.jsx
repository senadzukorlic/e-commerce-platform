export function RowDiv({ children, width, color }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: width,
        backgroundColor: color,
        paddingLeft: "20px",
      }}
    >
      {children}
    </div>
  )
}
