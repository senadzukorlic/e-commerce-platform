import GitHubIcon from "@mui/icons-material/GitHub"
import { LinkedIn } from "@mui/icons-material"
import myPhoto from "../../Assets/IMG_6688.jpg"

import {
  StyledCardMedia,
  StyledTypographyName,
  StyledTypographyCity,
  LineDiv,
  StyledLink,
  StyledCardContent,
  StyledTypographyDescription,
  StyledAboutUsContainer,
  StyledPersonCard,
  StyledImageContainer,
  StyledSocialLinksContainer,
} from "./Style.js"

const myInfo = [
  {
    name: "Senad Zukorlic",
    city: "NOVI PAZAR, SERBIA",
    description:
      " Hi, I’m Senad, a 23-year-old web development student specializing in JavaScript, React, and TypeScript. Nice to meet you.",

    github: "https://github.com/senadzukorlic",
    linkedIn: "https://www.linkedin.com/in/senad-zukorlic-49343a276/",
  },
]

export function AboutUs() {
  return (
    <StyledAboutUsContainer>
      {myInfo.map((info) => (
        <StyledPersonCard key={info.name}>
          <StyledImageContainer>
            <StyledCardMedia component="img" image={myPhoto} />
          </StyledImageContainer>
          <StyledCardContent>
            <StyledTypographyName gutterBottom variant="h1">
              {info.name}
            </StyledTypographyName>
            <StyledTypographyCity gutterBottom variant="h6">
              {info.city}
            </StyledTypographyCity>
            <LineDiv />
            <StyledTypographyDescription variant="body2" color="text.secondary">
              {info.description}
            </StyledTypographyDescription>
            <StyledSocialLinksContainer>
              <StyledLink href={info.github} target="_blank">
                <GitHubIcon />
              </StyledLink>
              <StyledLink href={info.linkedIn} target="_blank">
                <LinkedIn />
              </StyledLink>
            </StyledSocialLinksContainer>
          </StyledCardContent>
        </StyledPersonCard>
      ))}
    </StyledAboutUsContainer>
  )
}
