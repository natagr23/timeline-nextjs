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
import data from '../../data/data_private_revelations.json';
import { metadata } from './metadata';

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

const Private = () => {
  const pageTitle = metadata.title.default;
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
                    expanded={expanded === item.content_collapsible1 + index}
                    onChange={handleChange(item.content_collapsible1 + index)}
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
                                    /(Por qué murió Anneliese|La Virgen María se le aparece de nuevo para pedirle penitencia por las almas que se pierden, y contesta que sí|La Virgen María se aparece a Anneliese y la cura|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
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
                    expanded={expanded === item.content_collapsible2 + index}
                    onChange={handleChange(item.content_collapsible2 + index)}
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
                                    /(Exorcismo No. 4|Exorcismo No. 3|Exorcismo No.2|Exorcismo No.1|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
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
                      {(item.date === 'Alemania-1952' ||
                        item.date === 'Suiza-1937') && (
                        <>
                          <Typography
                            style={{
                              fontFamily: 'Trebuchet MS',
                              fontSize: '0.9em',
                              fontWeight: 'bold',
                            }}
                          >
                            Advertencias futuras o eventos posteriores II
                          </Typography>{' '}
                        </>
                      )}
                      {item.date !== 'Alemania-1952' &&
                        item.date !== 'Suiza-1937' && (
                          <>
                            <Typography
                              style={{
                                fontFamily: 'Trebuchet MS',
                                fontSize: '0.9em',
                                fontWeight: 'bold',
                              }}
                            >
                              Cómo Mitigarlo
                            </Typography>
                          </>
                        )}
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
                                    /(Ver Como Mitigarlo II|Exorcismo No. 3|Exorcismo No. 2|Exorcismo No. 10|Exorcismo No. 9|Exorcismo No. 8|Exorcismo No. 7|Exorcismo No. 6|Exorcismo No. 5|Las Uvas de San Damiano|Oración de reparación a Dios|El mismo mensaje ha dado Nuestra Señora en Lourdes y en Fátima: oración, penitencia y consagración a su Inmaculado Corazón.|Coronilla Reparadora|Oraciones enseñadas a los pastorcitos|Acto de Consagración al Inmaculado Corazón de María|Consagración al Sacratísimo Corazón Eucarístico de Jesús|1. Oraciones de Vida:|2. Sem-Chi-Go:|3. Vida de Ofrecimiento:|4. Amen:|Salud del alma y del cuerpo |Las Cinco Espiritualidades|Oración Diaria|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
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
                  {(item.date === 'Alemania-1952' ||
                    item.date === 'Suiza-1937') && (
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
                          {item.date === 'Alemania-1952' && (
                            <>
                              <Typography
                                style={{
                                  fontFamily: 'Trebuchet MS',
                                  fontSize: '0.9em',
                                  fontWeight: 'bold',
                                }}
                              >
                                Cómo Mitigarlo
                              </Typography>
                            </>
                          )}
                          {item.date === 'Suiza-1937' && (
                            <>
                              <Typography
                                style={{
                                  fontFamily: 'Trebuchet MS',
                                  fontSize: '0.9em',
                                  fontWeight: 'bold',
                                }}
                              >
                                Advertencias futuras o eventos posteriores III
                              </Typography>
                            </>
                          )}
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
                                          /(Exorcismo No. 4|Coronilla en honor a San Miguel Arcángel|Coronilla de las Lágrimas y Sangre|Séptimo Día de la SETENA)/
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : line.match(/(Fuente:)/i) ? (
                                          <Link
                                            href={line
                                              .split(/(Fuente:)/i)[2]
                                              .trim()}
                                          >
                                            {line}
                                          </Link>
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
                    </>
                  )}

                  {(item.date === 'Suiza-1937' ||
                    item.date === 'Alemania-1952') && (
                    <>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible5 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible5 + index
                        )}
                      >
                        <AccordionSummary
                          aria-controls="panel4d-content"
                          id="panel4d-header"
                        >
                          {item.date !== 'Alemania-1952' && (
                            <>
                              <Typography
                                style={{
                                  fontFamily: 'Trebuchet MS',
                                  fontSize: '0.9em',
                                  fontWeight: 'bold',
                                }}
                              >
                                Advertencias futuras o eventos posteriores IV
                              </Typography>
                            </>
                          )}
                          {item.date === 'Alemania-1952' && (
                            <>
                              <Typography
                                style={{
                                  fontFamily: 'Trebuchet MS',
                                  fontSize: '0.9em',
                                  fontWeight: 'bold',
                                }}
                              >
                                Como Mitigarlo II
                              </Typography>
                            </>
                          )}
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
                                          /(Exorcismo No. 5|Exorcismo No. 6|Completo Exorcismo contra Satanás y los Ángeles Rebeldes|Exorcismo de León XIII|Coronilla en honor a San Miguel Arcángel|Coronilla de las Lágrimas y Sangre|Séptimo Día de la SETENA)/
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : line.match(/(Fuente:)/i) ? (
                                          <Link
                                            href={line
                                              .split(/(Fuente:)/i)[2]
                                              .trim()}
                                          >
                                            {line}
                                          </Link>
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
                    </>
                  )}
                  {item.date === 'Suiza-1937' && (
                    <>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible6 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible6 + index
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
                            Advertencias futuras o eventos posteriores V
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
                                          /(Ver como Mitigarlo|Exorcismo No. 7|Coronilla en honor a San Miguel Arcángel|Coronilla de las Lágrimas y Sangre|Séptimo Día de la SETENA)/
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : line.match(/(Fuente:)/i) ? (
                                          <Link
                                            href={line
                                              .split(/(Fuente:)/i)[2]
                                              .trim()}
                                          >
                                            {line}
                                          </Link>
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
                  {item.date === 'Suiza-1937' && (
                    <>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible7 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible7 + index
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
                            Advertencias futuras o eventos posteriores VI
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
                              {item.content_collapsible7 &&
                              Array.isArray(item.content_collapsible7)
                                ? item.content_collapsible7.map(
                                    (line, index) => (
                                      <React.Fragment key={index}>
                                        {line.match(
                                          /(Exorcismo No. 8|Exorcismo No. 9|Coronilla en honor a San Miguel Arcángel|Coronilla de las Lágrimas y Sangre|Séptimo Día de la SETENA)/
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : line.match(/(Fuente:)/i) ? (
                                          <Link
                                            href={line
                                              .split(/(Fuente:)/i)[2]
                                              .trim()}
                                          >
                                            {line}
                                          </Link>
                                        ) : (
                                          line
                                        )}
                                        <br />
                                      </React.Fragment>
                                    )
                                  )
                                : item.content_collapsible7}
                            </>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  )}
                  {item.date === 'Suiza-1937' && (
                    <>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible8 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible8 + index
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
                            Advertencias futuras o eventos posteriores VII
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
                              {item.content_collapsible8 &&
                              Array.isArray(item.content_collapsible8)
                                ? item.content_collapsible8.map(
                                    (line, index) => (
                                      <React.Fragment key={index}>
                                        {line.match(
                                          /(Como Mitigarlo|Exorcismo No. 12|Exorcismo No. 11|Exorcismo No. 10|Coronilla en honor a San Miguel Arcángel|Coronilla de las Lágrimas y Sangre|Séptimo Día de la SETENA)/
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : line.match(/(Fuente:)/i) ? (
                                          <Link
                                            href={line
                                              .split(/(Fuente:)/i)[2]
                                              .trim()}
                                          >
                                            {line}
                                          </Link>
                                        ) : (
                                          line
                                        )}
                                        <br />
                                      </React.Fragment>
                                    )
                                  )
                                : item.content_collapsible8}
                            </>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  )}
                  {item.date === 'Suiza-1937' && (
                    <>
                      <Accordion
                        expanded={
                          expanded === item.content_collapsible9 + index
                        }
                        onChange={handleChange(
                          item.content_collapsible9 + index
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
                            <>
                              {item.content_collapsible9 &&
                              Array.isArray(item.content_collapsible9)
                                ? item.content_collapsible9.map(
                                    (line, index) => (
                                      <React.Fragment key={index}>
                                        {line.match(
                                          /(Indulgencias por las almas del purgatorio|Oración al ángel de la guarda|Estampas con imágenes piadosas y folletos |Anna Catalina Emmerick |Tomas de Kempis|Sor María de Jesús de Agreda|Libros y Estampas con imágenes piadosas|Coronilla en honor a San Miguel Arcángel|Coronilla de las Lágrimas y Sangre|Séptimo Día de la SETENA)/
                                        ) ? (
                                          <strong>{line}</strong>
                                        ) : line.match(/(Fuente:)/i) ? (
                                          <Link
                                            href={line
                                              .split(/(Fuente:)/i)[2]
                                              .trim()}
                                          >
                                            {line}
                                          </Link>
                                        ) : (
                                          line
                                        )}
                                        <br />
                                      </React.Fragment>
                                    )
                                  )
                                : item.content_collapsible9}
                            </>
                          </Typography>
                          {item.date === 'Suiza-1937' && (
                            <>
                              <>Devoción e imagen a la Divina Misericordia</>
                              <br />
                              <img
                                src="https://cdn.culturagenial.com/es/imagenes/divina-misericordia-1-3c.jpg"
                                alt="Jesus de la divina misericordia"
                                style={{
                                  display: 'inline-grid',
                                  marginBottom: '20px',
                                  marginTop: '15px',
                                  width: '200px',
                                }}
                              />
                              <br />
                              <Link href="https://www.ewtn.com/es/catolicismo/fiestas-liturgicas/divina-misericordia-21077">
                                Fuente:
                                https://www.ewtn.com/es/catolicismo/fiestas-liturgicas/divina-misericordia-21077
                              </Link>
                              <br />
                              <br />
                              <>Devoción e imagen al Sagrado Corazón de Jesús</>
                              <br />
                              <img
                                src="https://www.devocionario.com/imagenes/corazon.jpg"
                                alt="sagrado corazon de jesus"
                                style={{
                                  display: 'inline-grid',
                                  marginBottom: '20px',
                                  marginTop: '15px',
                                  width: '200px',
                                }}
                              />
                              <br />
                              <Link href="https://es.catholic.net/op/articulos/15586/la-devocin-al-sagrado-corazn-de-jess.html#modal">
                                Fuente:
                                https://es.catholic.net/op/articulos/15586/la-devocin-al-sagrado-corazn-de-jess.html#modal
                              </Link>
                              <br />
                              <br />
                              <>
                                Devoción e imagen al Inmaculado Corazón de María
                              </>
                              <br />
                              <img
                                src="http://www.rezarconfe.com/uploads/7/5/1/7/7517084/editor/sagrado-corazon-de-mar-a.jpg?1518005147"
                                alt="Inmaculado corazon de María"
                                style={{
                                  display: 'inline-grid',
                                  marginBottom: '20px',
                                  marginTop: '15px',
                                  width: '200px',
                                }}
                              />
                              <br />
                              <Link href="https://www.ewtn.com/es/catolicismo/fiestas-liturgicas/inmaculado-corazon-de-maria-20998">
                                Fuente:
                                https://www.ewtn.com/es/catolicismo/fiestas-liturgicas/inmaculado-corazon-de-maria-20998
                              </Link>
                              <br />
                              <br />
                              <br />
                              <>Devoción e imagen de la Santa Faz</>
                              <br />
                              <img
                                src="https://unpasoaldia.files.wordpress.com/2021/01/faz.jpg"
                                alt="santa faz"
                                style={{
                                  display: 'inline-grid',
                                  marginBottom: '20px',
                                  marginTop: '15px',
                                  width: '200px',
                                }}
                              />
                              <br />
                              <Link href="https://unpasoaldia.com/2021/01/15/devocionario-de-la-santa-faz-de-jesus/">
                                Fuente:
                                https://unpasoaldia.com/2021/01/15/devocionario-de-la-santa-faz-de-jesus/
                              </Link>
                              <br />
                              <br />
                              <br />
                              <>
                                Meditación e imagen de Nuestro Señor Jesucristo
                                en el Huerto de los Olivos
                              </>
                              <br />
                              <img
                                src="https://3.bp.blogspot.com/-ywdARYFNNXU/UVUCrmb6JSI/AAAAAAAATgk/jpeiuAlNp84/s1600/Antolinez-huerto_olivos-1a.jpg"
                                alt="huerto de los olivos"
                                style={{
                                  display: 'inline-grid',
                                  marginBottom: '20px',
                                  marginTop: '15px',
                                  width: '200px',
                                }}
                              />
                              <br />
                              <Link href="https://www.aciprensa.com/recurso/2581/meditacion-sobre-la-agonia-de-jesus-en-el-huerto-de-los-olivos">
                                Fuente:
                                https://www.aciprensa.com/recurso/2581/meditacion-sobre-la-agonia-de-jesus-en-el-huerto-de-los-olivos
                              </Link>
                              <br />
                              <br />
                              <>
                                Descargar-Tratado de la verdadera devoción a La
                                Santísima Virgen de San Luis María de Montfort
                              </>
                              <br />
                              <Link href="https://www.montfort.org/content/uploads/pdf/PDF_ES_26_1.pdf">
                                Fuente:
                                https://www.montfort.org/content/uploads/pdf/PDF_ES_26_1.pdf
                              </Link>
                              <br />
                              <br />
                              <>Devociones de Santa Brígida</>
                              <br />
                              <br />
                              <>15 Oraciones</>
                              <br />
                              <Link href="https://hozana.org/es/oracion/oracion/santa-brigida">
                                Fuente:
                                https://hozana.org/es/oracion/oracion/santa-brigida
                              </Link>
                              <br />
                              <br />
                              <>7 Pater Noster</>
                              <br />
                              <Link href="https://hozana.org/es/oracion/oracion/santa-brigida/oraciones-por-doce-anos">
                                Fuente:
                                https://hozana.org/es/oracion/oracion/santa-brigida/oraciones-por-doce-anos
                              </Link>
                              <br />
                            </>
                          )}
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

export default Private;
