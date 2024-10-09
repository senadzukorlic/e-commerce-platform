import {
  BoxTab,
  CategoryH1,
  CenteredContainer,
  StyledTab,
} from "./stylePagination"
import Tabs from "@mui/material/Tabs"

export function Pagination({ value, onChange, categories, categoryName }) {
  return (
    <>
      <CategoryH1>{categoryName}</CategoryH1>
      <CenteredContainer>
        <BoxTab>
          <Tabs
            value={value}
            onChange={onChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {categories.map((cat) => (
              <StyledTab
                key={cat.label}
                label={cat.label}
                value={cat.category}
              />
            ))}
          </Tabs>
        </BoxTab>
      </CenteredContainer>
    </>
  )
}
