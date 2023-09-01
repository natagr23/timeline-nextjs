import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const Footer = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <div>
        <Box sx={{ width: 500 }} style={{ alignItems: 'center' }}></Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link href={'/'} className="content" style={{}}>
            <BottomNavigationAction
              label="Recents"
              icon={<LightbulbCircleIcon />}
            />
            <span style={{ fontWeight: 'bold' }}>
              Profecías de la Virgen María
            </span>
          </Link>
          <Link href={'/private'} className="content" style={{}}>
            <BottomNavigationAction
              label="Favorites"
              icon={<ImportContactsIcon />}
            />
            <span style={{ fontWeight: 'bold' }}>
              Profecías en revelaciones privadas católicas
            </span>
          </Link>
        </BottomNavigation>
      </div>
      <br />
      <span style={{ marginBottom: '1.3' + 'em' }}>
        © 2023 NGR. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
