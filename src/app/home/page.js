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
                        <>
                          {item.content_collapsible1 &&
                          Array.isArray(item.content_collapsible1)
                            ? item.content_collapsible1.map((line, index) => (
                                <React.Fragment key={index}>
                                  {line.match(
                                    /(Otros Mensajes|Salud del alma y del cuerpo |Promesas de Nuestro Señor Jesús|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
                                  ) ? (
                                    <strong>{line}</strong>
                                  ) : line.match(/(Fuente:)/i) ? (
                                    <Link
                                      href={line.split(/(Fuente:)/i)[2].trim()}
                                    >
                                      {line}
                                    </Link>
                                  ) : (
                                    line
                                  )}
                                  <br />
                                </React.Fragment>
                              ))
                            : item.content_collapsible1}
                        </>
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
                        <>
                          {item.content_collapsible2 &&
                          Array.isArray(item.content_collapsible2)
                            ? item.content_collapsible2.map((line, index) => (
                                <React.Fragment key={index}>
                                  {line.match(
                                    /(Habrá un Segundo Pentecostés|El perfume y el óleo|Advertencias|Fuente de Naju|Sobre la importancia de la Eucaristía|Sobre el aborto y la inhumana actuación que supone el mismo|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
                                  ) ? (
                                    <strong>{line}</strong>
                                  ) : line.match(/(Fuente:)/i) ? (
                                    <Link
                                      href={line.split(/(Fuente:)/i)[2].trim()}
                                    >
                                      {line}
                                    </Link>
                                  ) : (
                                    line
                                  )}
                                  <br />
                                </React.Fragment>
                              ))
                            : item.content_collapsible2}
                        </>
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
                          <>
                            <img
                              src="http://t1.gstatic.com/images?q=tbn:ANd9GcQtYlifFtAflGLmPFCJtk_rkzTpGl5eAzoVqR1B7xU97LgJP5i1"
                              alt="Imagen de Chile-1983"
                              style={{
                                display: 'inline-grid',
                                marginBottom: '20px',
                                marginTop: '15px',
                                width: '200px',
                              }}
                            />
                          </>
                        )}
                        {item.date === 'Francia-1972' && (
                          <>
                            <strong>Cruz de Amor</strong>
                            <br />
                            <img
                              src="https://bottegadivina.files.wordpress.com/2022/11/santa-cruz-gloriosa-de-la-victoria731.jpg?w=2000&h="
                              alt="cruz_de_dozule"
                              style={{
                                display: 'inline-grid',
                                marginBottom: '20px',
                                marginTop: '15px',
                                width: '350px',
                              }}
                            />
                            <br />
                            <img
                              src="https://bottegadivina.files.wordpress.com/2022/11/91f255ca-0c3e-4c18-9bd7-91829f684890.jpg?w=2000&h="
                              alt="cruz_de_dozule"
                              style={{
                                display: 'inline-grid',
                                marginBottom: '20px',
                                marginTop: '15px',
                                width: '350px',
                              }}
                            />
                            <br />
                          </>
                        )}

                        <>
                          {item.content_collapsible3 &&
                          Array.isArray(item.content_collapsible3)
                            ? item.content_collapsible3.map((line, index) => (
                                <React.Fragment key={index}>
                                  {line.match(
                                    /(1. Oraciones de Vida:|2. Sem-Chi-Go:|3. Vida de Ofrecimiento:|4. Amen:|Salud del alma y del cuerpo |Las Cinco Espiritualidades|Oración Diaria|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
                                  ) ? (
                                    <strong>{line}</strong>
                                  ) : line.match(/(Fuente:)/i) ? (
                                    <Link
                                      href={line.split(/(Fuente:)/i)[2].trim()}
                                    >
                                      {line}
                                    </Link>
                                  ) : (
                                    line
                                  )}
                                  <br />
                                </React.Fragment>
                              ))
                            : item.content_collapsible3}
                        </>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  {item.date === 'Brasil-1991-present' && (
                    <>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible4 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible4 + index
                        )}
                      >
                        <AccordionSummary
                          aria-controls="panel4d-content"
                          id="panel4d-header"
                        >
                          <Typography
                            style={{
                              fontFamily: 'Trebuchet MS',
                              fontSize: '0.9em',
                              fontWeight: 'bold',
                            }}
                          >
                            Cómo Mitigarlo II
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            style={{
                              fontFamily: 'Trebuchet MS',
                              fontSize: '0.9em',
                            }}
                          >
                            <>
                              {item.content_collapsible4 &&
                              Array.isArray(item.content_collapsible4)
                                ? item.content_collapsible4.map(
                                    (line, index) => (
                                      <React.Fragment key={index}>
                                        {line.match(
                                          /(ROSARIO DE LA PAZ|Primer Dia de la SETENA |Segundo Día de la SETENA|HORA DE LA PAZ|ROSARIO DE LA EUCARISTÍA|ORACIÓN FINAL|CONSAGRACIONES CONSAGRACIÓN AL SAGRADO CORAZÓN DE JESÚS|CONSAGRACIÓN AL INMACULADO CORAZÓN DE MARÍA|CONSAGRACIÓN AL ESPÍRITU SANTO|Tercer Día de la SETENA|Cuarto Día de la SETENA|Quinto Día de la SETENA|Sexto Día de la SETENA|Séptimo Día de la SETENA)/
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : (
                                          line
                                        )}
                                        <br />
                                      </React.Fragment>
                                    )
                                  )
                                : item.content_collapsible4}
                            </>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible5 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible5 + index
                        )}
                      >
                        <AccordionSummary
                          aria-controls="panel5d-content"
                          id="panel5d-header"
                        >
                          <Typography
                            style={{
                              fontFamily: 'Trebuchet MS',
                              fontSize: '0.9em',
                              fontWeight: 'bold',
                            }}
                          >
                            Cómo Mitigarlo III
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            style={{
                              fontFamily: 'Trebuchet MS',
                              fontSize: '0.9em',
                            }}
                          >
                            <>
                              {item.content_collapsible5 &&
                              Array.isArray(item.content_collapsible5)
                                ? item.content_collapsible5.map(
                                    (line, index) => (
                                      <React.Fragment key={index}>
                                        {line.match(
                                          /(Hora del Espíritu Santo |Hora de los Ángeles de Dios|Hora de San José|Modo de Rezar|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : (
                                          line
                                        )}
                                        <br />
                                      </React.Fragment>
                                    )
                                  )
                                : item.content_collapsible5}
                            </>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible6 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible6 + index
                        )}
                      >
                        <AccordionSummary
                          aria-controls="panel5d-content"
                          id="panel5d-header"
                        >
                          <Typography
                            style={{
                              fontFamily: 'Trebuchet MS',
                              fontSize: '0.9em',
                              fontWeight: 'bold',
                            }}
                          >
                            Cómo Mitigarlo IV
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            style={{
                              fontFamily: 'Trebuchet MS',
                              fontSize: '0.9em',
                            }}
                          >
                            <>
                              {item.content_collapsible6 &&
                              Array.isArray(item.content_collapsible6)
                                ? item.content_collapsible6.map(
                                    (line, index) => (
                                      <React.Fragment key={index}>
                                        {line.match(
                                          /(Hora del Sagrado Corazón de Jesús |Hora de los Santos de Dios|Hora de la Eucaristía |Modo de Rezar|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : (
                                          line
                                        )}
                                        <br />
                                      </React.Fragment>
                                    )
                                  )
                                : item.content_collapsible6}
                            </>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  )}
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
