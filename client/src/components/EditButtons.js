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

const EditBooksBtn = ({
    editingBooks,
	index
	}) => {
 const classes = useStyles();

  const EditData = (id) => {
	  let baseURL = '/edit/' + id;
	  console.log(` Books which ID = '${id}' is edited!`);
	  
          fetch(baseURL, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        })
            .then((res) => {
                console.log("then in EditButtons.js", res);
            })
            .catch(res => console.log("editbooks chatch", res));
	};

  const multiEdited = () => {
    EditData(index)
    editingBooks(index)
  }
  return (
    <div>
      <Button 
        variant="contained"
        color="primary"
        type='button'
        className={classes.button}
        href='/edit'
        onClick = {multiEdited}>
      Edit book
      </Button>
    </div>
  );
}
export default  EditBooksBtn;