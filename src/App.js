import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CostAnalysis from "./app/pages/costAnalysis"
import "./App.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  window.onbeforeunload = function (e) {
    localStorage.clear();
  };

  return (
    <div className='app-div'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'black' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{'& button:focus' :{backgroundColor: 'black', borderColor: 'black'}}} variant="scrollable" >
        <Tab style={{color: 'white'}} label="Summary" {...a11yProps(0)} />
          <Tab style={{color: 'white'}} label="Cost Analysis" {...a11yProps(1)} />
          <Tab style={{color: 'white'}} label="Performance" {...a11yProps(2)} />
          <Tab style={{color: 'white'}} label="ROI" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Summary
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section >
        <h2>Cost Overview</h2>
        </section>
        <CostAnalysis />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Performance
      </TabPanel>
      <TabPanel value={value} index={3}>
        RIO
      </TabPanel>
    </Box>
    </div>
  );
}


export default App;