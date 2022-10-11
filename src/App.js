// import React from "react"
// import CostAnalysis from "./app/pages/costAnalysis"
// import {} from 'react-router-dom'

// const App = () =>{
//   return(
//     <div style={{width: '100%', height: "100vh", display : 'grid', gridTemplateColumns: "80% 20%", backgroundColor: 'black'}}>
//       <CostAnalysis />
//       {/* <div style={{backgroundColor: 'blue', height: "100px"}}>
//         <h1>testing</h1>
//       </div> */}
//     </div>
//   )
// }


// export default App;



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
          <Typography>{children}</Typography>
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

  return (
    <div className='app-div'>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{color: 'white'}} label="Cost Analysis" {...a11yProps(0)} />
          <Tab style={{color: 'white'}} label="Performance" {...a11yProps(1)} />
          <Tab style={{color: 'white'}} label="ROI" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <section style={{display: "grid", gridTemplateColumns: "80% 10%"}}>
        <h2>Cost Overview</h2>
        </section>
        <CostAnalysis />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </div>
  );
}


export default App;