import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChoiceType from './ChoiceType.js';
import Results from './Results.js';
import { useStateStore } from '../store/store.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '10px'
  }
}));

export default function Content() {
  const [{ primary, secondary}, dispatch] = useStateStore();
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      { primary !== null && secondary !== null
        ? <Results />
        : <ChoiceType />
      }
    </div>
  );
}


