import { Box, Container, Stack, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
  twitter: TwitterIcon,
} as const;

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--accent-bg)',
        borderTop: '1px solid var(--border)',
        marginTop: 'auto',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={4}
          sx={{
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Social Links */}
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            {portfolioData.social.map((social) => {
              const IconComponent = iconMap[social.platform as keyof typeof iconMap];
              return IconComponent ? (
                <IconButton
                  key={social.platform}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  sx={{
                    color: 'var(--accent)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      backgroundColor: 'var(--accent-border)',
                    },
                  }}
                >
                  <IconComponent />
                </IconButton>
              ) : null;
            })}
          </Stack>

          {/* Contact Email */}
          <Typography
            component="a"
            href={`mailto:${portfolioData.personal.email}`}
            sx={{
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.3s',
              '&:hover': {
                color: 'var(--accent)',
              },
            }}
          >
            {portfolioData.personal.email}
          </Typography>

          {/* Copyright */}
          <Typography
            sx={{
              fontSize: '12px',
              color: 'var(--text)',
              opacity: 0.7,
            }}
          >
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
