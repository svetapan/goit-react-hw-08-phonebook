import React from 'react';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';

const HomePage = () => {
  return (
    <div style={{display: "inline-block", borderRadius: 10, marginTop: 40, padding: 25, backgroundColor: "rgb(232, 237, 242, 0.95)",
     boxShadow: "0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12)"}}>
      <strong style={{display: "block", fontSize: 40}}>Welcome to the Phone Book!</strong>
      <ContactPhoneTwoToneIcon  style={{fontSize: 60}} />
    </div>
  );
};

export default HomePage;