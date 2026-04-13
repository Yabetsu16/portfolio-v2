import {
  Box,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Grid,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ScrollReveal } from '../../utils/ScrollReveal';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { motion } from 'framer-motion';

export const Projects = () => {
  // Sort projects: featured first, then by date
  const sortedProjects = [...portfolioData.projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
  });

  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: { xs: 6, md: 10 },
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--accent-bg)',
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
              Projects
            </Typography>
          </ScrollReveal>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Grid
              container
              spacing={3}
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              }}
            >
              {sortedProjects.map((project) => (
                <Box
                  key={project.id}
                >
                  <motion.div variants={staggerItem}>
                    <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'var(--bg)',
                      border: '1px solid var(--border)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'var(--accent)',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px var(--shadow)',
                      },
                    }}
                  >
                    {/* Image Placeholder */}
                    {project.image ? (
                      <CardMedia
                        component="img"
                        height="220"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <Box
                        sx={{
                          height: '220px',
                          backgroundColor: 'var(--accent-bg)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderBottom: '1px solid var(--border)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: 'var(--text)',
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                    )}

                    <CardContent sx={{ pb: 3, flex: 1 }}>
                      <Stack spacing={2}>
                        {/* Title */}
                        <Typography
                          sx={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: 'var(--text-h)',
                          }}
                        >
                          {project.title}
                          {project.featured && (
                            <Chip
                              label="Featured"
                              size="small"
                              sx={{
                                ml: 1,
                                backgroundColor: 'var(--accent)',
                                color: '#fff',
                                height: '24px',
                              }}
                            />
                          )}
                        </Typography>

                        {/* Description */}
                        <Typography
                          sx={{
                            fontSize: '15px',
                            color: 'var(--text)',
                            lineHeight: 1.6,
                          }}
                        >
                          {project.description}
                        </Typography>

                        {/* Technologies */}
                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                          {project.technologies.map((tech) => (
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

                        {/* Links */}
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ pt: 1, mt: 'auto', flexWrap: 'wrap' }}
                        >
                          {project.links.github && (
                            <Button
                              component="a"
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outlined"
                              size="small"
                              startIcon={<GitHubIcon />}
                              sx={{
                                borderColor: 'var(--accent)',
                                color: 'var(--accent)',
                                textTransform: 'none',
                                '&:hover': {
                                  backgroundColor: 'var(--accent-bg)',
                                  borderColor: 'var(--accent)',
                                },
                              }}
                            >
                              Code
                            </Button>
                          )}
                          {(project.links.live || project.links.demo) && (
                            <Button
                              component="a"
                              href={project.links.live || project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="contained"
                              size="small"
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
                              Live Demo
                            </Button>
                          )}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                  </motion.div>
                </Box>
              ))}
            </Grid>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Projects;
