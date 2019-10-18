import React from 'react';
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
	  console.log(` Books which ID = '${id}' is deleted!`);
	  
          fetch(baseURL, {
            method: 'delete',
        })
            .then((res) => {
                console.log(res);
            })
            .catch(res => console.log(res));
	};

  const multiDeleted = (e) => {
    e.preventDefault();
    DeleteData(index)
    removeBooks(index)
  }


  return (
    <div>
      < Button 
      variant = "contained"
      color = "secondary"
      className = {classes.button}
      onClick = {multiDeleted}>
        Delete
      </Button>
    </div>
  );
}
export default  ContainedButtons;