export function ColumnDiv({ children, width, color }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: width,
        backgroundColor: color,
      }}
    >
      {children}
    </div>
  )
}
