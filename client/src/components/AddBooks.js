import React, { useState,useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const OutlinedTextFields = () => {

  const classes = useStyles();

    const [books, setBooks] = useState([
      fetch('/api/addbooks',{
        method:'Post',
        heders:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        }
      })
        .then(res => res.json())
        .then(books => setBooks([...books, {
        books
        }]), () => console.log('fetched...!!', books))
  ]);
  const [values, setValues] = useState({
    name: 'H.Tumanyan',
  });
useEffect(() => {
        console.log("use Effect ran",books );
    }, [books])

  const handleChange = name => event => {
	setValues({ ...values, [name]: event.target.value });
  console.log(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
      required
        id="outlined-name"
        label="Author Full Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        name="author"
        variant="outlined"
      />
    
      <TextField
      required
        id="outlined-uncontrolled"
        label="Book Name"
        defaultValue="foo"
        className={classes.textField}
        margin="normal"
        name="bookstitle"
        variant="outlined"
      />
        <TextField
      required
        id="outlined-number"
        label="Prise"
        type="number"
        className={classes.textField}
        margin="normal"
        name="price"
        variant="outlined"
      />
           <TextField
           required
        id="filled-multiline-static"
        label="Discription"
        multiline
        rows="4"
        columns='10'
        name="discription"
        defaultValue="Your Discription"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}

export default OutlinedTextFields;
