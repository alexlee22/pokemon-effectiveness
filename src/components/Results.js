import React from 'react';
import Effectivness from './Effectiveness.js';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { types_data, types_color } from '../data.js'
import { useStateStore } from '../store/store.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  divider: {
    margin: "10px 0"
  },
  section: {
    margin: "0 0 20px 0"
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 'calc(100% - 20px)',
    flexWrap: 'wrap',
    padding: '0 10px'
  },
  button: {
    color: 'black',
    minWidth: '100px',
    margin: '10px 0',
  },
}));

export default function Results() {
  const [{ primary, secondary}, dispatch] = useStateStore();
  const classes = useStyles();

  function handlePickTypes(){
    dispatch({
      type: "setResetTypes",
      payload: null
    });
  }
  if (primary){
    //console.log(types_data[primary])
  }

  
  return (
    <div className={classes.root}>
      <Typography variant="h4">Type Effectiness</Typography>
      <Typography variant="h5" style={{textTransform: 'capitalize'}}>{primary} & {secondary}</Typography>
      <Divider className={classes.divider}/>
      <Effectivness />
      <Divider className={classes.divider}/>
      <Button variant="contained" color="secondary" onClick={() => handlePickTypes()}>Pick Again</Button>
    </div>
  )
}

/*
<h2 style={{textAlign: "center"}}>Pick  <span style={{textDecoration: 'underline'}}>{ primary ? "Secondary" : "Primary" }</span> Type</h2>
<div className={classes.buttonContainer}>
  { Object.keys(types_data).map( (d, idx) => 
    <Button 
      key={d}
      variant="contained" 
      className={classes.button} 
      style={primary === d ? {backgroundColor: 'grey'} : {backgroundColor: types_color[d]}}
      onClick={ () => { 
        if (primary) { handleAssign("setSecondary", d) } 
        else { handleAssign("setPrimary", d)}
      }}
      disabled={primary===d}
    >
      { d }
    </Button>
  )}
</div>
*/