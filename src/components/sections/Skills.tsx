import { Box, Container, Typography, Stack, Card, CardContent } from '@mui/material';
import { ScrollReveal } from '../../utils/ScrollReveal';
import { portfolioData } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { motion } from 'framer-motion';

export const Skills = () => {
  // Group skills by category
  const skillsByCategory = portfolioData.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof portfolioData.skills>
  );

  const categories = Object.keys(skillsByCategory).sort();

  const proficiencyColor = (proficiency?: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'rgba(170, 59, 255, 0.2)';
      case 'Advanced':
        return 'rgba(192, 132, 252, 0.15)';
      case 'Intermediate':
        return 'rgba(192, 132, 252, 0.1)';
      default:
        return 'var(--accent-bg)';
    }
  };

  return (
    <Box
      component="section"
      id="skills"
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
              Skills
            </Typography>
          </ScrollReveal>

          {/* Skills by Category */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Stack spacing={6}>
              {categories.map((category) => (
                <motion.div key={category} variants={staggerItem}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--text-h)',
                        mb: 3,
                      }}
                    >
                      {category}
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 2 }}>
                      {skillsByCategory[category].map((skill) => (
                        <Card
                          key={skill.id}
                          sx={{
                            backgroundColor: proficiencyColor(skill.proficiency),
                            border: '1px solid var(--accent-border)',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: 'var(--accent)',
                              transform: 'translateY(-4px)',
                              boxShadow: '0 8px 16px var(--shadow)',
                            },
                          }}
                        >
                          <CardContent
                            sx={{
                              p: '12px 16px',
                              '&:last-child': { pb: '12px' },
                            }}
                          >
                            <Stack spacing={0.5}>
                              <Typography
                                sx={{
                                  fontSize: '15px',
                                  fontWeight: 600,
                                  color: 'var(--accent)',
                                }}
                              >
                                {skill.name}
                              </Typography>
                              {skill.proficiency && (
                                <Typography
                                  sx={{
                                    fontSize: '12px',
                                    color: 'var(--text)',
                                  }}
                                >
                                  {skill.proficiency}
                                </Typography>
                              )}
                            </Stack>
                          </CardContent>
                        </Card>
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Skills;
