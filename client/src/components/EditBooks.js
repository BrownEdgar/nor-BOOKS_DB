import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  container: {
     display: 'flex',
    justifyContent:"center",
    alignItems: "center",
    marginTop:"5%",
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: 200,
  },
}));

const EditBooks = ({index,editingBooks}) => {

  const classes = useStyles();

     const [values, setValues] = useState({
    author:"New author name",
    bookstitle:"",
    discription:"",
    price:""
  });
  const handleChange = name => event => {
	setValues({ ...values, [name]: event.target.value });
  };

  const EditData = () => {
    let baseURL = 'http://localhost:5555/edit/5da9a1712f67f30588d00ab7';
    console.log(values);
    axios.post(baseURL, values)
        
            .then((res) => {
                console.log("then in EditButtons.js", res);
            })
            .catch(res => console.log("editbooks chatch", res));
  };
  const multiEdited = (e) => {
    e.preventDefault();
    EditData()

  }
  return (
    <div>
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="author"
        className={classes.textField}
        placeholder={values.author}
        onChange={handleChange('author')}
        margin="normal"
        name="author"
        id="author"
        variant="outlined"
      />
    
      <TextField
      required
        id="outlined-uncontrolled"
        label="Book Name"
        className={classes.textField}
        margin="normal"
        placeholder={values.bookstitle}
        onChange={handleChange('bookstitle')}
        name="bookstitle"
        variant="outlined"
      />
        <TextField
      required
        id="outlined-number"
        label="Prise"
        type="number"
        className={classes.textField}
         onChange={handleChange('price')}
        margin="normal"
        name="price"
        variant="outlined"
      />
           <TextField
        id="filled-multiline-static"
        label="Discription"
        multiline
        rows="4"
        columns='10'
        name="discription"
        onChange={handleChange('discription')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
         <Button 
      variant="contained" 
      color="primary" 
      type='button'
      className={classes.button} 
      onClick = {multiEdited}
      size="medium">
       Edit Books
      </Button>
    </form>
       <Button 
      variant="contained" 
      color="primary" 
      type='text'
      className={classes.button} 
      href="/api/addbooks"
      size="medium">
        Back
      </Button>
</div> 
 );
}

export default EditBooks;
