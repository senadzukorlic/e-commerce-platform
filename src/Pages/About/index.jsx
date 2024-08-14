import GitHubIcon from "@mui/icons-material/GitHub"
import { LinkedIn } from "@mui/icons-material"
import myPhoto from "../../Assets/IMG_6688.jpg"
import logo from "../../Assets/JacpiStore.png"

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
  StyledProjectCard,
  StyledCardMedia2,
  StyledImageContainer2,
  StyledTypographyDescription2,
} from "./style.js"

const myInfo = [
  {
    name: "Senad Zukorlic",
    city: "NOVI PAZAR, SERBIA",
    description:
      " Hi, I’m Senad, a 23-year-old web development student specializing in JavaScript, React, and TypeScript. Nice to meet you.",

    github: "https://github.com/senadzukorlic",
    linkedIn: "https://www.linkedin.com/in/senad-zukorlic-49343a276/",
    aboutProject:
      "Hello! This is my first application, which is an e-commerce platform. It was developed as part of my frontend studies. Users of this application can access products featured in the store, including clothing, electronics, and sports equipment. They can view detailed information about the products, read reviews, see additional product photos, select favorite items, create a personal account,choose product sizes, and make purchases using credit cards.The current version of the application was built using React. In the future, I plan to develop my own backend, rewrite parts of the code in TypeScript, and add more features to enhance the user experience.",
  },
]

export function About() {
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
      {myInfo.map((info) => (
        <StyledProjectCard>
          <StyledImageContainer2>
            <StyledCardMedia2 component="img" image={logo} />
          </StyledImageContainer2>

          <StyledTypographyDescription2 variant="body2" color="text.secondary">
            {info.aboutProject}
          </StyledTypographyDescription2>
        </StyledProjectCard>
      ))}
    </StyledAboutUsContainer>
  )
}
