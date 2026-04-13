import { Box, Container, Typography, Stack, Card, CardContent, Chip, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ScrollReveal } from '../../utils/ScrollReveal';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { motion } from 'framer-motion';

export const Certificates = () => {
  // Sort by date (newest first)
  const sortedCertificates = [...portfolioData.certificates].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Box
      component="section"
      id="certificates"
      sx={{
        py: { xs: 6, md: 10 },
        borderTop: '1px solid var(--border)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/* Section Title */}
          <ScrollReveal>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 700,
                color: 'var(--text-h)',
              }}
            >
              Certificates & Credentials
            </Typography>
          </ScrollReveal>

          {/* Certificates Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Stack spacing={3}>
              {sortedCertificates.map((cert) => (
                <motion.div key={cert.id} variants={staggerItem}>
                  <Card
                    sx={{
                      backgroundColor: 'var(--bg)',
                      border: '1px solid var(--border)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'var(--accent)',
                        transform: 'translateX(4px)',
                        boxShadow: '0 8px 16px var(--shadow)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Stack spacing={3}>
                        {/* Header */}
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                          }}
                        >
                          <Box
                            sx={{
                              p: 1.5,
                              backgroundColor: 'var(--accent-bg)',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              minWidth: '48px',
                            }}
                          >
                            <EmojiEventsIcon sx={{ color: 'var(--accent)' }} />
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              sx={{
                                fontSize: '20px',
                                fontWeight: 700,
                                color: 'var(--text-h)',
                              }}
                            >
                              {cert.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '16px',
                                color: 'var(--accent)',
                                fontWeight: 600,
                              }}
                            >
                              {cert.issuer}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Date & Credential ID */}
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexWrap: 'wrap' }}>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              color: 'var(--text)',
                              fontWeight: 500,
                            }}
                          >
                            📅 {new Date(cert.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                            })}
                          </Typography>
                          {cert.credentialId && (
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: 'var(--text)',
                                fontWeight: 500,
                              }}
                            >
                              ID: <code>{cert.credentialId}</code>
                            </Typography>
                          )}
                        </Stack>

                        {/* Skills */}
                        {cert.skills && cert.skills.length > 0 && (
                          <Box>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: 'var(--text-h)',
                                mb: 1.5,
                              }}
                            >
                              Skills Covered
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                              {cert.skills.map((skill) => (
                                <Chip
                                  key={skill}
                                  label={skill}
                                  size="small"
                                  sx={{
                                    backgroundColor: 'var(--accent-bg)',
                                    color: 'var(--accent)',
                                    border: '1px solid var(--accent-border)',
                                  }}
                                />
                              ))}
                            </Stack>
                          </Box>
                        )}

                        {/* View Certificate Button */}
                        {cert.credentialUrl && (
                          <Box>
                            <Button
                              component="a"
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="contained"
                              endIcon={<OpenInNewIcon />}
                              sx={{
                                backgroundColor: 'var(--accent)',
                                color: '#fff',
                                textTransform: 'none',
                                '&:hover': {
                                  backgroundColor: 'var(--accent)',
                                },
                              }}
                            >
                              View Certificate
                            </Button>
                          </Box>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Certificates;
