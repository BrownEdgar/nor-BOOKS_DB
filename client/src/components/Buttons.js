import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//css
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
  input: {
    display: 'none',
  },
}));

const ContainedButtons = ({
		removeBooks,
		index
	}) => {
 const classes = useStyles();

  const DeleteData = (id) => {
	  let baseURL = '/delete/' + id;
	  console.log('baseURL', baseURL);
	  
          fetch(baseURL, {
            method: 'delete',
        })
            .then((res) => {
                console.log(res);
            })
            .catch(res => console.log(res));
	};
	const multiplay = ()=>{
		DeleteData(index);
		removeBooks(index)
	}

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Edit
      </Button>
      < Button 
      variant = "contained"
	  onClick = {multiplay}
      color = "secondary"
      className = {classes.button}
      >
        Delete
      </Button>
    </div>
  );
}
export default  ContainedButtons;