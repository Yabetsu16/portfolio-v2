import { Box, Container, Typography, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../../utils/ScrollReveal';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer } from '../../utils/animations';

export const About = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 6, md: 10 },
        borderTop: '1px solid var(--border)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Section Title */}
          <ScrollReveal>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 700,
                color: 'var(--text-h)',
                mb: 2,
              }}
            >
              About Me
            </Typography>
            <Typography
              sx={{
                fontSize: '18px',
                color: 'var(--text)',
                maxWidth: '600px',
              }}
            >
              {portfolioData.about.headline}
            </Typography>
          </ScrollReveal>

          {/* Content Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center',
            }}
          >
            {/* Summary */}
            <ScrollReveal>
              <Stack spacing={4}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: 'var(--text)',
                    lineHeight: 1.8,
                  }}
                >
                  {portfolioData.about.summary}
                </Typography>

                {/* Highlights */}
                <Stack spacing={2}>
                  {portfolioData.about.highlights.map((highlight, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        paddingLeft: 2,
                        borderLeft: '3px solid var(--accent)',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '15px',
                          color: 'var(--text)',
                        }}
                      >
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </ScrollReveal>

            {/* Stats or Additional Info */}
            <ScrollReveal>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Stack spacing={3}>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: 'var(--accent-bg)',
                      borderRadius: '12px',
                      border: '1px solid var(--accent-border)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: 'var(--text)',
                        mb: 1,
                      }}
                    >
                      Quick Facts
                    </Typography>
                    <Stack spacing={2}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '28px',
                            fontWeight: 700,
                            color: 'var(--accent)',
                          }}
                        >
                          4+
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: 'var(--text)',
                          }}
                        >
                          Years of Experience
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '28px',
                            fontWeight: 700,
                            color: 'var(--accent)',
                          }}
                        >
                          20+
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: 'var(--text)',
                          }}
                        >
                          Certificates
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Tech Stack Preview */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--text-h)',
                        mb: 2,
                      }}
                    >
                      Tech Stack
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                      {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
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
                </Stack>
              </motion.div>
            </ScrollReveal>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
