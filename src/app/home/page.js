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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
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
              date="2011 - present"
              iconStyle={{ background: 'rgb(247,247,247)' }}
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
                    <Image
                      src="/Virgen_de_guadalupe1.jpeg"
                      width={100}
                      alt="green iguana"
                      height={150}
                      style={{ display: 'inline-grid' }}
                    />
                    <Typography
                      fontFamily="Segoe UI Symbol"
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ marginTop: '0.5' + 'em' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontFamily="Segoe UI Symbol"
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <span style={{ marginLeft: '1' + 'em' }}>Source:</span>
                    <Link color="#6b34a6" href={item.link} variant="body2">
                      <span style={{ marginLeft: '1' + 'em' }}>
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
                      <Typography fontFamily="Segoe UI Symbol">
                        Advertencias que ocurrieron
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontFamily="Segoe UI Symbol">
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
                      <Typography fontFamily="Segoe UI Symbol">
                        Advertencias Futuras
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontFamily="Segoe UI Symbol">
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
                      <Typography fontFamily="Segoe UI Symbol">
                        Cómo Mitigarlo
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography fontFamily="Segoe UI Symbol">
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
