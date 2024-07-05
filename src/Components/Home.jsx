import { GlobalStyles } from "../items.styled"
import {
  Container,
  HomeH3,
  HomeH1,
  HomeP,
  HomePDiv,
  HomeTitleDiv,
  HomeParentDiv,
} from "../items.styled"
import NavBar from "../MUI/NavBar"
import Buttons from "./Home/Buttons"

export default function Home() {
  return (
    <HomeParentDiv>
      <GlobalStyles />
      <NavBar />
      <Container>
        <HomeTitleDiv>
          <HomeH3>
            Seasonal discount: an even better offer and more models
          </HomeH3>
          <HomeH1>Up to - 60%</HomeH1>
          <HomeH3>Online exclusive</HomeH3>
        </HomeTitleDiv>
        <HomePDiv>
          <Buttons />

          <HomeP>
            The offer is valid online, on marked items, from 03.07.2024. until
            07.07.2024, or until the stock runs out. Cannot be combined with
            other discounts. Offer may vary in stores and online.
          </HomeP>
        </HomePDiv>
      </Container>
    </HomeParentDiv>
  )
}
