'use client';
import React, { useState } from 'react';
import '../../app/App.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Box, Typography, Link } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';
import '@aws-amplify/ui-react/styles.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import '@fontsource/roboto/300.css';
import data from '../../data/data_mother_mary.json';

export const metadata = {
  title:
    'Profecias de los ultimos tiempos segun apariciones de la Virgen Maria',
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} rounded {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 2,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    marginTop: '0.2px',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Home = () => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        background: 'rgb(217, 207, 173)',
      }}
    >
      <VerticalTimeline>
        {data.map((item, index) => (
          <>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: '#000000',
                marginTop: '20px',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(69, 126, 217)',
              }}
              date={item.date}
              iconStyle={{ background: 'rgb(33,150,243)' }}
              icon={
                <>
                  <span
                    style={{ marginTop: '1.3' + 'em' }}
                    class={item.country_flag}
                  ></span>
                </>
              }
              intersectionObserverProps={{ triggerOnce: false }}
            >
              <Card raised>
                <Card>
                  <CardMedia />
                  <CardContent>
                    <img
                      src={item.imageSrc}
                      width={100}
                      alt="mother mary"
                      height={150}
                      style={{ display: 'inline-grid' }}
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        marginTop: '1.2' + 'em',
                        fontSize: '1.0em',
                        fontWeight: 'bold',
                        fontFamily: 'Trebuchet MS',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <span
                      style={{
                        marginLeft: '1' + 'em',
                        fontSize: '12px',
                        fontFamily: 'Trebuchet MS',
                      }}
                    >
                      Fuente:
                    </span>
                    <Link color="#6b34a6" href={item.link} variant="body2">
                      <span
                        style={{
                          marginLeft: '1' + 'em',
                          fontSize: '11px',
                          fontFamily: 'Trebuchet MS',
                        }}
                      >
                        {item.link}
                      </span>
                    </Link>
                  </CardActions>
                  <Accordion
                    expanded={expanded === item.content_collapsible1}
                    onChange={handleChange(item.content_collapsible1)}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography
                        style={{
                          fontFamily: 'Trebuchet MS',
                          fontSize: '0.9em',
                          fontWeight: 'bold',
                        }}
                      >
                        Prodigios que ocurrieron
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          fontFamily: 'Trebuchet MS',
                          fontSize: '0.9em',
                        }}
                      >
                        {item.content_collapsible1}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === item.content_collapsible2}
                    onChange={handleChange(item.content_collapsible2)}
                  >
                    <AccordionSummary
                      aria-controls="panel2d-content"
                      id="panel2d-header"
                    >
                      <Typography
                        style={{
                          fontFamily: 'Trebuchet MS',
                          fontSize: '0.9em',
                          fontWeight: 'bold',
                        }}
                      >
                        Advertencias futuras o eventos posteriores
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          fontFamily: 'Trebuchet MS',
                          fontSize: '0.9em',
                        }}
                      >
                        {item.content_collapsible2}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === item.content_collapsible3 + index}
                    onChange={handleChange(item.content_collapsible3 + index)}
                  >
                    <AccordionSummary
                      aria-controls="panel3d-content"
                      id="panel3d-header"
                    >
                      <Typography
                        style={{
                          fontFamily: 'Trebuchet MS',
                          fontSize: '0.9em',
                          fontWeight: 'bold',
                        }}
                      >
                        Cómo Mitigarlo
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          fontFamily: 'Trebuchet MS',
                          fontSize: '0.9em',
                        }}
                      >
                        {item.date === 'Chile-1983' && (
                          <img
                            src="http://t1.gstatic.com/images?q=tbn:ANd9GcQtYlifFtAflGLmPFCJtk_rkzTpGl5eAzoVqR1B7xU97LgJP5i1"
                            alt="Imagen de Chile-1983"
                          />
                        )}
                        {item.date === 'Francia-1972' && (
                          <>
                            <img
                              src="https://bottegadivina.files.wordpress.com/2022/11/santa-cruz-gloriosa-de-la-victoria731.jpg?w=2000&h="
                              alt="cruz_de_dozule"
                            />
                            <img
                              src="https://bottegadivina.files.wordpress.com/2022/11/91f255ca-0c3e-4c18-9bd7-91829f684890.jpg?w=2000&h="
                              alt="cruz_de_dozule"
                            />
                          </>
                        )}
                        {item.date === 'Brasil-1991-present' && (
                          <>
                            <h5>Escapulario Gris de la Paz</h5>
                            <br />
                            <img
                              src="http://2.bp.blogspot.com/-wf0jQkqDVEc/U4E7_XYrNmI/AAAAAAAABNA/isrNPUdtxlY/s1600/images.jpg"
                              alt="escapulario_gris"
                            />
                            <br />
                            <img
                              src="http://4.bp.blogspot.com/-5mzH2nUaMfQ/U4E8vpCnV8I/AAAAAAAABNI/b588fauyEpw/s1600/MEDALLA+DE+LA+PAZ.JPG"
                              alt="medalla_paz"
                            />
                            <br />
                            <img
                              src="http://3.bp.blogspot.com/-QCiAPhVQgj4/U4E9UUiqz_I/AAAAAAAABNQ/omwlTZ9lCyA/s1600/Santa+Medalha+de+S%C3%A3o+Jos%C3%A9+no+C%C3%A9u.jpg"
                              alt="medalla_san_jose"
                            />
                          </>
                        )}
                        {item.content_collapsible3}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Card>
              </Card>
            </VerticalTimelineElement>
          </>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Home;
