import { Box, Button, Container, Stack, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { portfolioData } from '../../data/portfolio';
import { ScrollReveal } from '../../utils/ScrollReveal';

export const Contact = () => {
  const email = portfolioData.personal.email;

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--accent-bg)',
      }}
    >
      <Container maxWidth="md">
        <ScrollReveal>
          <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center' }}>
            <EmailOutlinedIcon sx={{ color: 'var(--accent)', fontSize: 40 }} />
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 700,
                color: 'var(--text-h)',
              }}
            >
              Let&apos;s work together
            </Typography>
            <Typography sx={{ maxWidth: 560, color: 'var(--text)' }}>
              Have a project or opportunity in mind? Send me an email and I&apos;ll get back to you.
            </Typography>
            <Button
              component="a"
              href={`mailto:${email}`}
              variant="contained"
              endIcon={<OpenInNewIcon />}
              sx={{
                mt: 1,
                px: 3,
                py: 1.25,
                backgroundColor: 'var(--accent)',
                color: '#fff',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'var(--accent)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Email {email}
            </Button>
          </Stack>
        </ScrollReveal>
      </Container>
    </Box>
  );
};

export default Contact;
