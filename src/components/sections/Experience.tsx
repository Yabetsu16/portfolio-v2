import { Box, Container, Typography, Stack, Card, CardContent, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { ScrollReveal } from '../../utils/ScrollReveal';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--accent-bg)',
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
              }}
            >
              Experience
            </Typography>
          </ScrollReveal>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Stack spacing={3}>
              {portfolioData.experiences.map((exp) => (
                <motion.div key={exp.id} variants={staggerItem}>
                  <Card
                    sx={{
                      backgroundColor: 'var(--bg)',
                      border: '1px solid var(--border)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'var(--accent)',
                        transform: 'translateY(-4px)',
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
                            }}
                          >
                            <WorkIcon sx={{ color: 'var(--accent)' }} />
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography
                              sx={{
                                fontSize: '20px',
                                fontWeight: 700,
                                color: 'var(--text-h)',
                              }}
                            >
                              {exp.position}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '16px',
                                color: 'var(--accent)',
                                fontWeight: 600,
                              }}
                            >
                              {exp.company}
                            </Typography>
                          </Box>
                        </Box>

                        {/* Duration */}
                        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              color: 'var(--text)',
                              fontWeight: 500,
                            }}
                          >
                            📅 {exp.duration}
                          </Typography>
                          {exp.location && (
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: 'var(--text)',
                                fontWeight: 500,
                              }}
                            >
                              📍 {exp.location}
                            </Typography>
                          )}
                        </Stack>

                        {/* Description */}
                        <Typography
                          sx={{
                            fontSize: '15px',
                            color: 'var(--text)',
                            lineHeight: 1.6,
                          }}
                        >
                          {exp.description}
                        </Typography>

                        {/* Highlights */}
                        <Stack spacing={1}>
                          {exp.highlights.map((highlight, idx) => (
                            <Typography
                              key={idx}
                              sx={{
                                fontSize: '14px',
                                color: 'var(--text)',
                                pl: 2,
                                borderLeft: '2px solid var(--accent)',
                              }}
                            >
                              {highlight}
                            </Typography>
                          ))}
                        </Stack>

                        {/* Technologies */}
                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                          {exp.technologies.map((tech) => (
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

export default Experience;
