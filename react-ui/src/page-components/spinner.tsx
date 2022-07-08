import React from 'react';
import './spinner.css';

const Spinner = (props: any) => {
  const defaultStyles = {
    border: '10px solid #f3f3f3',
    borderTop: '10px solid #3498db',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: 'auto',
    animation: 'spin 1s ease-in-out infinite',
  };

  //console.log(`isInitialized: ${JSON.stringify(props.isInitialized)}`);

  if(props.isInitialized == true) {
    return (<div style={{ ...defaultStyles, ...props.customStyles }} ></div>)
  } else {
    return (<div/>)
  }
}

export default Spinner;