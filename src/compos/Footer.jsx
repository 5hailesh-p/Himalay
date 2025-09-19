import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LandscapeIcon from '@mui/icons-material/Landscape';

const Footer = () => {
  const telegramLink = import.meta.env.VITE_SOCIAL_TELEGRAM;
  const githubLink = import.meta.env.VITE_SOCIAL_GITHUB;
  const facebookLink = import.meta.env.VITE_SOCIAL_FACEBOOK;
  const instagramLink = import.meta.env.VITE_SOCIAL_INSTAGRAM;
  const youtubeLink = import.meta.env.VITE_SOCIAL_YOUTUBE;
  return (
    <Box
      sx={{
        // bgcolor: "primary.main",
        // color: "white",
        mt: 4,
        pt: 4,
        pb: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo & Text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <LandscapeIcon   />
              {/* <Box
                component="img"
                src="https://via.placeholder.com/40"
                alt="logo"
                sx={{ mr: 1, borderRadius: "50%" }}
              /> */}
              <Typography variant="h6" fontWeight="bold">
                {import.meta.env.VITE_SITE_NAME}
              </Typography>
            </Box>
            <Typography variant="body2">
              Building innovative solutions for a better tomorrow.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" color="inherit" underline="hover">Home</Link>
              <Link href="#" color="inherit" underline="hover">About</Link>
              <Link href="#" color="inherit" underline="hover">Services</Link>
              <Link href="#" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href={telegramLink} target="_blank">
                <TelegramIcon />
              </IconButton>
              <IconButton color="inherit" href={githubLink} target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href={facebookLink} target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href={instagramLink} target="_blank">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" href={youtubeLink} target="_blank">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box mt={3} borderTop="1px solid rgba(255,255,255,0.2)" pt={2}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} <Typography variant="span"  ><b>{import.meta.env.VITE_SITE_NAME}</b></Typography> . All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
