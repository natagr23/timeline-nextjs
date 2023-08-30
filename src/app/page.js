'use client';
import React, { useState } from 'react';
import './App.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  Box,
  Container,
  Grid,
  Pagination,
  Typography,
  Stack,
} from '@mui/material';
import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Modal,
  Toolbar,
} from '@mui/material';

import Button from '@mui/material/Button';
import Image from 'next/image';
import img from './data/images/cards/Virgen_de_guadalupe1.jpeg';
import '@aws-amplify/ui-react/styles.css';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';

const backgroundImage = './data/images/cards/Virgen_de_guadalupe1.jpeg';

const items = [
  {
    title: 'January 2022',
    cardTitle: 'Event 1',
    cardSubtitle: 'Event 1 Subtitle',
    cardDetailedText: 'This is the first event on the timeline.',
  },
  {
    title: 'February 2022',
    cardTitle: 'Event 2',
    cardSubtitle: 'Event 2 Subtitle',
    cardDetailedText: 'This is the second event on the timeline.',
  },
  {
    title: 'March 2022',
    cardTitle: 'Event 3',
    cardSubtitle: 'Event 3 Subtitle',
    cardDetailedText: 'This is the third event on the timeline.',
  },
];

const Home = ({ photo, ...rest }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        width: { sm: `calc(100% - ${240}px)` },
        ml: { sm: `${240}px` },
        background: 'rgb(255, 246, 241)',
      }}
    >
      <VerticalTimeline layout="1-column-right">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
          intersectionObserverProps={{ triggerOnce: false }}
        >
          <Card
            raised
            sx={{
              maxWidth: 600,
              position: 'relative', // Set the parent card as relative positioning
              background: `url(${backgroundImage}) center/cover no-repeat`,
              boxShadow: 'none', // Remove the default shadow
            }}
          >
            <Card sx={{ maxWidth: 600 }}>
              <Image src={img} alt="green iguana" height={150} />
              <IconButton color="secondary" onClick={handleOpen}>
                {' '}
                <OpenInFullIcon />
              </IconButton>
              <Modal
                sx={{ overflowY: 'scroll' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  display="flex"
                  justifycontent="center"
                  alignItems="center"
                  minheight="30vh"
                  // sx={style}
                >
                  <Toolbar>
                    <CardMedia
                      component="img"
                      height="800"
                      image={'./data/images/cards/Virgen_de_guadalupe1.jpeg'}
                      title="test title"
                    />
                    <Image src={img} alt="green iguana" height={150} />
                  </Toolbar>

                  <IconButton color="secondary" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Modal>
              <CardMedia />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Card>
        </VerticalTimelineElement>
      </VerticalTimeline>
      {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
          intersectionObserverProps={{ triggerOnce: false }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
          intersectionObserverProps={{ triggerOnce: false }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
          intersectionObserverProps={{ triggerOnce: false }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
          intersectionObserverProps={{ triggerOnce: false }}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
          intersectionObserverProps={{ triggerOnce: false }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
          intersectionObserverProps={{ triggerOnce: false }}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          intersectionObserverProps={{ triggerOnce: false }}
        />
      </VerticalTimeline>*/}
    </Box>
  );
};

export default Home;
