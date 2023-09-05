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
                      alt="green iguana"
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
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
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
                    expanded={expanded === 'panel2'}
                    onChange={handleChange('panel2')}
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
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
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

export default Private;
