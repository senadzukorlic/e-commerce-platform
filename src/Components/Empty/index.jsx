import { EmptyItemCard, H1 } from "./style"

export function EmptyComponent({ text }) {
  return (
    <EmptyItemCard>
      <H1>{text}</H1>
    </EmptyItemCard>
  )
}
