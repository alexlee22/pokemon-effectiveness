import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { types_data, types_color } from '../data.js'
import { useStateStore } from '../store/store.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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

  function handleAssign(priority, type){
    dispatch({
      type: priority,
      payload: type
    });
  }
  
  console.log(primary, secondary)
  return (
    <div className={classes.root}>
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
    </div>
  );
}

