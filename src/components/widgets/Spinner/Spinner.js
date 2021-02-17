import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => (
    <div className={classes.Loader}>Waiting for Data to load...</div>
    // <div>Waiting for Data to load...</div>
);

export default Spinner;