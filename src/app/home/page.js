"use client";
import React, { useState } from "react";
import "../../app/App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, Link } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";
import "@aws-amplify/ui-react/styles.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "@fontsource/roboto/300.css";
import data from "../../data/data_mother_mary.json";
import { metadata } from "./metadata";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} rounded {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 2,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    marginTop: "0.2px",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Home = () => {
  const pageTitle = metadata.title.default;
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        background: "rgb(217, 207, 173)",
      }}
    >

      <VerticalTimeline  layout="2-columns">
        {data.map((item, index) => (
          <>
            <VerticalTimelineElement layout={"2-columns"}

              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 150, 243)",
                color: "#000000",
                marginTop: "20px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(69, 126, 217)",
              }}
              date={item.date}
              iconStyle={{ background: "rgb(33,150,243)" }}
              icon={
                <>
                  <span
                    style={{ marginTop: "1.3" + "em" }}
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
                      style={{ display: "inline-grid" }}
                    />
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        marginTop: "1.2" + "em",
                        fontSize: "1.0em",
                        fontWeight: "bold",
                        fontFamily: "Trebuchet MS",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <span
                      style={{
                        marginLeft: "1" + "em",
                        fontSize: "12px",
                        fontFamily: "Trebuchet MS",
                      }}
                    >
                      Fuente:
                    </span>
                    <Link color="#6b34a6" href={item.link} variant="body2">
                      <span
                        style={{
                          marginLeft: "1" + "em",
                          fontSize: "11px",
                          fontFamily: "Trebuchet MS",
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
                          fontFamily: "Trebuchet MS",
                          fontSize: "0.9em",
                          fontWeight: "bold",
                        }}
                      >
                        Prodigios que ocurrieron
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          fontFamily: "Trebuchet MS",
                          fontSize: "0.9em",
                        }}
                      >
                        <>
                          {item.content_collapsible1 &&
                          Array.isArray(item.content_collapsible1)
                            ? item.content_collapsible1.map((line, index) => (
                                <React.Fragment key={index}>
                                  {line.match(
                                    /(El Apocalipsis Mariano|Los videntes|Resumen de las 18 apariciones|Las terribles calamidades que fueron anunciadas se empezaron a cumplir|Difusión de los mensajes|Los 5 años siguientes|Otros Mensajes|Salud del alma y del cuerpo |Promesas de Nuestro Señor Jesús|\(Siete Misterios Dolorosos\))/i
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
                          fontFamily: "Trebuchet MS",
                          fontSize: "0.9em",
                          fontWeight: "bold",
                        }}
                      >
                        Advertencias futuras o eventos posteriores
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          fontFamily: "Trebuchet MS",
                          fontSize: "0.9em",
                        }}
                      >
                        <>
                          {item.content_collapsible2 &&
                          Array.isArray(item.content_collapsible2)
                            ? item.content_collapsible2.map((line, index) => (
                                <React.Fragment key={index}>
                                  {line.match(
                                    /(Mensaje para la humanidad: Viernes Santo|Los secretos de la Salette|Palabras Graves de Juan Pablo II acerca del Tercer Secreto|Los tres secretos de Fátima|Primer secreto de Fátima|Segundo secreto de Fátima|Tercer secreto de Fátima |Sacratísimo Corazón Eucarístico de Jesús en Tí confío|Habrá un Segundo Pentecostés|El perfume y el óleo|Advertencias|Fuente de Naju|Sobre la importancia de la Eucaristía|Sobre el aborto y la inhumana actuación que supone el mismo|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
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
                          fontFamily: "Trebuchet MS",
                          fontSize: "0.9em",
                          fontWeight: "bold",
                        }}
                      >
                        Cómo Mitigarlo
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        style={{
                          fontFamily: "Trebuchet MS",
                          fontSize: "0.9em",
                        }}
                      >
                        {item.date === "Chile-1983" && (
                          <>
                            <img
                              src="http://t1.gstatic.com/images?q=tbn:ANd9GcQtYlifFtAflGLmPFCJtk_rkzTpGl5eAzoVqR1B7xU97LgJP5i1"
                              alt="Imagen de Chile-1983"
                              style={{
                                display: "inline-grid",
                                marginBottom: "20px",
                                marginTop: "15px",
                                width: "200px",
                              }}
                            />
                          </>
                        )}
                        {item.date === "Francia-1972" && (
                          <>
                            <strong>Cruz de Amor</strong>
                            <br />
                            <img
                              src="https://bottegadivina.files.wordpress.com/2022/11/santa-cruz-gloriosa-de-la-victoria731.jpg?w=2000&h="
                              alt="cruz_de_dozule"
                              style={{
                                display: "inline-grid",
                                marginBottom: "20px",
                                marginTop: "15px",
                                width: "350px",
                              }}
                            />
                            <br />
                            <img
                              src="https://bottegadivina.files.wordpress.com/2022/11/91f255ca-0c3e-4c18-9bd7-91829f684890.jpg?w=2000&h="
                              alt="cruz_de_dozule"
                              style={{
                                display: "inline-grid",
                                marginBottom: "20px",
                                marginTop: "15px",
                                width: "350px",
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
                                    /(La Devoción de los Primeros Sábados|Rosario de las Lágrimas y Sangre dedicado a María Rosa Mística|Las Uvas de San Damiano|Oración de reparación a Dios|El mismo mensaje ha dado Nuestra Señora en Lourdes y en Fátima: oración, penitencia y consagración a su Inmaculado Corazón.|Coronilla Reparadora|Oraciones enseñadas a los pastorcitos|Acto de Consagración al Inmaculado Corazón de María|Consagración al Sacratísimo Corazón Eucarístico de Jesús|1. Oraciones de Vida:|2. Sem-Chi-Go:|3. Vida de Ofrecimiento:|4. Amen:|Salud del alma y del cuerpo |Las Cinco Espiritualidades|Oración Diaria|Siete Dolores de San José\(Siete Misterios Dolorosos\))/i
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
                      {item.date === "Argentina-1983" && (
                        <>
                          <br />
                          <>Medalla</>
                          <br />
                          <img
                            src="https://i.etsystatic.com/13312237/r/il/b7d787/4665010038/il_794xN.4665010038_3qmf.jpg"
                            alt="Medalla"
                            style={{
                              display: "inline-grid",
                              marginBottom: "20px",
                              marginTop: "15px",
                              width: "200px",
                            }}
                          />
                          <br />
                          <img
                            src="https://i.etsystatic.com/13312237/r/il/46c456/4664974038/il_794xN.4664974038_1yma.jpg"
                            alt="Medalla2"
                            style={{
                              display: "inline-grid",
                              marginBottom: "20px",
                              marginTop: "15px",
                              width: "200px",
                            }}
                          />
                          <br />

                          <Link href="https://www.etsy.com/es/listing/1425738691/medalla-nuestra-senora-del-rosario-de">
                            Fuente:
                            https://www.etsy.com/es/listing/1425738691/medalla-nuestra-senora-del-rosario-de
                          </Link>
                          <br />
                        </>
                      )}
                      {item.date === "Italia-1947" && (
                        <>
                          <br />
                          <>Fuente de agua</>
                          <br />
                          <img
                            src="https://carifilii.es/wp-content/uploads/2016/11/FUENTE-ACTUAL.jpgtn_.jpg"
                            alt="Fuente"
                            style={{
                              display: "inline-grid",
                              marginBottom: "20px",
                              marginTop: "15px",
                              width: "200px",
                            }}
                          />
                          <br /> <br />
                          <Link href="https://carifilii.es/apariciones/listado-de-apariciones/rosa-mistica">
                            Fuente:
                            https://carifilii.es/apariciones/listado-de-apariciones/rosa-mistica
                          </Link>
                          <br />
                          <br />
                          <>Medalla</>
                          <br />
                          <img
                            src="https://rdcwp.s3.amazonaws.com/wp-content/uploads/2004/06/Medalla-de-la-Rosa-M%C3%ADstica.jpg"
                            alt="Medalla"
                            style={{
                              display: "inline-grid",
                              marginBottom: "20px",
                              marginTop: "15px",
                              width: "200px",
                            }}
                          />
                          <br />
                          <Link href="https://www.reinadelcielo.org/apariciones-de-maria-rosa-mistica-italia/">
                            Fuente:
                            https://www.reinadelcielo.org/apariciones-de-maria-rosa-mistica-italia/
                          </Link>
                          <br />
                        </>
                      )}
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
