import React from "react";


export const DarkLayout = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.20)',
        borderRadius: '5px',
        padding: '50x',
    }}>
        <h3>ClubOfertas</h3>
        <div>
            { children } 
        </div>
    </div>
  );
};
