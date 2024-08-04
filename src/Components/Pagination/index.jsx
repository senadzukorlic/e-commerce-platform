import { BoxTab, CenteredContainer } from "./Style"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

export function Pagination({ value, onChange, categories }) {
  return (
    <>
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
              <Tab key={cat.label} label={cat.label} value={cat.category} />
            ))}
          </Tabs>
        </BoxTab>
      </CenteredContainer>
    </>
  )
}
