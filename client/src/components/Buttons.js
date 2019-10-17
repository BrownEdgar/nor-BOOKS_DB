import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
  input: {
    display: 'none',
  },
}));
/* event.preventDefault();
fetch('https://example.com/delete-item/', {
		method: 'DELETE',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify({
			id: '5bdcdfa40f0a326f858feae0'
		})
	})
	.then(res => res.json()) // OR res.text()
	.then(res => console.log(res))*/
const ContainedButtons = () => {
 const classes = useStyles();
  //  useEffect([
  // 	fetch('http://localhost:5555/delete/5da6e3bf3281a3333ca96c4a', {
  // 		method: 'DELETE',
  // 		headers: {
  // 			'content-type': 'application/json'
  // 		},
  // 	})
  // 	.then(res => console.log(res))
  // ]);


  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Edit
      </Button>
      < Button variant = "contained"
      href = ""
      color = "secondary"
      className = {
      	classes.button
      } >
        Delete
      </Button>
    </div>
  );
}
export default  ContainedButtons;