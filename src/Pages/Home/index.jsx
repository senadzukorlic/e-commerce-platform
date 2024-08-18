import {
  Container,
  HomeH3,
  HomeH1,
  HomeP,
  HomePDiv,
  HomeTitleDiv,
  HomeParentDiv,
} from "./style"
import { format, addDays } from "date-fns"
import AnotherButton from "./homeButtonsComp"

export default function Home() {
  const today = new Date()
  const startDate = format(today, "dd.MM.yyyy")
  const endDate = format(addDays(today, 4), "dd.MM.yyyy")

  return (
    <HomeParentDiv>
      <Container>
        <HomeTitleDiv>
          <HomeH3>
            Seasonal discount: an even better offer and more models
          </HomeH3>
          <HomeH1>Up to - 60%</HomeH1>
          <HomeH3>Online exclusive</HomeH3>
        </HomeTitleDiv>
        <HomePDiv>
          <AnotherButton />

          <HomeP>
            The offer is valid online, on marked items, from {startDate} until
            {endDate}, or until the stock runs out. Cannot be combined with
            other discounts. Offer may vary in stores and online.
          </HomeP>
        </HomePDiv>
      </Container>
    </HomeParentDiv>
  )
}
