import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Dashboard from 'client/dashboard';
import Footer from 'examples/Footer';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';

export default function MyEvents() {
  // const [value, setValue] = React.useState('1');

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (

    <DashboardLayout>
    <DashboardNavbar />
    <Box sx={{ width: '100%', typography: 'body1' }}>
      kdsfksfkv
    </Box>
    <Footer />
    </DashboardLayout>
  );
}
