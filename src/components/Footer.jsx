import {
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const iconos = [
  {
    title: "WhatsApp",
    linked: "https://wa.link/ab44l4",
    icon: <WhatsAppIcon />,
  },
  {
    title: "LinkedIn",
    linked: "https://www.linkedin.com/in/innavojaruges/",
    icon: <LinkedInIcon />,
  },
  {
    title: "GitHub",
    linked: "https://www.github.com/Innavoj",
    icon: <GitHubIcon />,
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <Container maxWidth="lg" sx={{ m: 2, p: 2, width: "100vw" }}>
          <Divider></Divider>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {iconos.map((i) => (
              <Grid item sx={{ m: 1.5, textAlign: "center" }} key={i.title}>
                <Link to={i.linked}>
                  <IconButton children={i.icon} size="large"></IconButton>
                </Link>
              </Grid>
            ))}
          </Grid>

          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              flexWrap: "wrap",
            }}
          >
            <Grid item sx={{ m: 1.5, textAlign: "center" }}>
              <Typography className="footer-letter">
                Innavoj Aruges © Derechos Reservados. Version 1.0 -{" "}
                {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}
