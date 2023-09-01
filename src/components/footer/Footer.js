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
            <span style={{ fontWeight: 'bold' }}>Virgen María</span>
          </Link>
          <Link href={'/private'} className="content" style={{}}>
            <BottomNavigationAction
              label="Favorites"
              icon={<ImportContactsIcon />}
            />
            <span style={{ fontWeight: 'bold' }}>
              Revelaciones privadas católicas
            </span>
          </Link>
        </BottomNavigation>
      </div>
      <br />
    </div>
  );
};

export default Footer;
