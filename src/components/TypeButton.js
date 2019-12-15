
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import { types_data, types_color } from '../data.js'
import { useStateStore } from '../store/store.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: 'black',
    minWidth: '100px',
    margin: '10px 0',
  }
}));

export default function TypeButton(props) {
  const [{ primary, secondary}, dispatch] = useStateStore();
  const { value, label, color, clickFunction } = props;
  const classes = useStyles();
  console.log(value, label, color, clickFunction)
  
  /*
  function handleAssign(priority, type){
    dispatch({
      type: priority,
      payload: type
    });
  }
  */

  return (
    <Button 
      variant="contained" 
      className={classes.button}
      style={primary === value ? {backgroundColor: 'grey'} : {backgroundColor: color}}
      onClick={() => clickFunction(value)}
      disabled={ primary === value }
    >
      {label}
    </Button>
  )
}


/*
<Button 
      variant="contained" 
      className={classes.button} 
      style={primary === d ? {backgroundColor: 'grey'} : {backgroundColor: types_color[d]}}
      onClick={ () => { onClickFunction() }}
      disabled={primary===d}
    />
*/