import GitHubIcon from "@mui/icons-material/GitHub"

import {
  StyledCardMedia,
  StyledTypographyName,
  StyledTypographyCity,
  LineDiv,
  StyledLink,
  StyledCardContent,
  StyledTypographyDescription,
} from "./Style.js"
import { LinkedIn } from "@mui/icons-material"
import logo from "../../Assets/JacpiStore.png"

const FirmInfo = [
  {
    name: "Senad Zukorlic",
    city: "NOVI PAZAR, SERBIA",
    position: "Frontend Developer",
    description: "Senad work's in center NIT as a Web developer",
    image:
      "src/Components/AboutUs/WhatsApp Image 2024-07-11 at 14.37.03_61008c20.jpg",
    github: "https://github.com/senadzukorlic",
    linkedIn: "https://www.linkedin.com/in/senad-zukorlic-49343a276/",
  },
]

export function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {FirmInfo.map((info) => (
        <div style={{ backgroundColor: "red", marginTop: "30px" }}>
          <div
            style={{
              width: "100%",
              height: 150,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              textDecoration: "center",
              backgroundColor: "purple",
            }}
          >
            <StyledCardMedia component="img" image={logo} />
          </div>
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                height: "22vh",
                gap: "60px",
              }}
            >
              <StyledLink href={info.github} target="_blank">
                <GitHubIcon />
              </StyledLink>
              <StyledLink href={info.linkedIn} target="_blank">
                <LinkedIn />
              </StyledLink>
            </div>
          </StyledCardContent>
        </div>
      ))}
    </div>
  )
}
