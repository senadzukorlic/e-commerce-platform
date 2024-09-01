import { EmptyItemCard, H1, ParentDiv } from "./styleEmpty"

export function EmptyComponent({ text }) {
  return (
    <ParentDiv>
      <EmptyItemCard>
        <H1>{text}</H1>
      </EmptyItemCard>
    </ParentDiv>
  )
}
