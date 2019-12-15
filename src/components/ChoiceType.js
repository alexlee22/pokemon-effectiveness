import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TypeButton from './TypeButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

export default function ChoiceType() {
  const [{ primary, secondary}, dispatch] = useStateStore();
  const classes = useStyles();

  function handleAssign(priority, type){
    dispatch({
      type: priority,
      payload: type
    });
  }
  
  function handleAssignType(selectedType){
    if (primary) {
      handleAssign("setSecondary", selectedType)
    } else {
      handleAssign("setPrimary", selectedType)
    }
  }
  

  return (
    <div className={classes.root}>
      <Typography style={{ textAlign: "center", margin: "15px 0" }} variant="h4">
        Pick  <span style={{textDecoration: 'underline'}}>{ primary ? "Secondary" : "Primary" }</span> Type
      </Typography>
      <div className={classes.buttonContainer}>
        { Object.keys(types_data).map( (d, idx) => 
          <TypeButton
            key={idx}
            value={d}
            label={d}
            color={types_color[d]}
            clickFunction={handleAssignType}
          />
        )}
      </div>
    </div>
  );
}

/*

return (
    <div className={classes.root}>
      <Typography style={{ textAlign: "center", margin: "15px 0" }} variant="h4">
        Pick  <span style={{textDecoration: 'underline'}}>{ primary ? "Secondary" : "Primary" }</span> Type
      </Typography>
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
*/

