import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import { types_data, types_color } from '../data.js'
import { useStateStore } from '../store/store.js';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  section: {
    margin: "0 0 20px 0"
  },
  typeElement: {
    padding: '7.5px',
    borderRadius: '10px',
    //margin: '0 10px 10px 0'
  },
  green: {
    color: '#00b16a'
  },
  red: {
    color: '#f03434'
  },

}));

function calculateTypes(list, dict, multiplier) {
  return list.reduce((l, d) => {
    if (d in l){
      l[d] = l[d] * multiplier;
    } else {
      l[d] = multiplier;
    }
    return l;
  }, dict);
}

function filterCategories(type){
  let multipliers = {
    'effective': {}, 
    'ineffective': {},
    'immunes': {}
  }

  return Object.keys(type).reduce((l, d) => {
    if (type[d] === 0){
      l['immunes'][d] = type[d];
    } else if (type[d] > 1){
      l['effective'][d] = type[d];
    } else if (type[d] < 1){
      l['ineffective'][d] = type[d];
    }
    return l;
  }, multipliers);
}



export default function Effectiveness() {
  const [{ primary, secondary}, dispatch] = useStateStore();
  const classes = useStyles();

  function formatData(data, heading, headingColor, icon){    
    let sortedKeys = Object.keys(data).sort(function(a, b){  
      return data[b] - data[a];
    });
    

    return (
      <section className={classes.section}>
        <Typography variant="h5" component="h5" style={{}} className={headingColor}>{icon}{heading}</Typography>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          { sortedKeys.length > 0
            ?
            sortedKeys.map((d,i) => 
              <div key={i} className={classes.typeElement} style={{backgroundColor: types_color[d]}}>
                <Typography variant="body1" style={{color: 'black', fontWeight: 500}}>
                  {data[d]}x <span style={{textTransform: 'uppercase'}}>{d}</span>
                </Typography>
              </div>
              )
            :
            <Typography variant="body1">None found.</Typography>
          }
        </div>
      </section>
    )
  }
  
  let types = {};
  let keys = [primary, secondary]
  for (let type = 0; type < keys.length; type++){
    if (keys[type]) {
      calculateTypes(types_data[keys[type]]['defence']['immunes'], types, 0)
      calculateTypes(types_data[keys[type]]['defence']['effective'], types, 0.5)
      calculateTypes(types_data[keys[type]]['defence']['ineffective'], types, 2)
    }
  }
  let data = filterCategories(types);

  return (
    <div className={classes.root}>
      { formatData(data.effective, 'Effective', classes.green, <CheckIcon/>)}
      { formatData(data.ineffective, 'Ineffective', classes.red, <CloseIcon/>)}
      { formatData(data.immunes, 'No Effect', classes.red, <ErrorOutlineIcon/>)}
    </div>
  );
}
