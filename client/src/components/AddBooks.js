import React, {
  useState
} from 'react'
import {
  makeStyles
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
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

const OutlinedTextFields = () => {

  const classes = useStyles();

  const [values, setValues] = useState({
    author: "",
    bookstitle: "",
    discription: "",
    price: ""
  });
  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };


  const saveData = () => {
    fetch('/api/addbooks', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then((res) => {
        console.log('then', res);
      })
      .catch(res => console.log('catch', res));
  };
  const multiSaveData = (e) => {
    e.preventDefault();
    saveData()
   
  }
  return (
     <form className = { classes.container}
    noValidate autoComplete = "off" >
    <TextField required id = "outlined-name"
    label = "Author Full Name"
    className = {
      classes.textField
    }
    value = {
      values.name
    }
    onChange = {
      handleChange('author')
    }
    margin = "normal"
    name = "author"
    variant = "outlined" /
    >

    <TextField required id = "outlined-uncontrolled"
    label = "Book Name"
    defaultValue = ""
    className = {
      classes.textField
    }
    margin = "normal"
    onChange = {
      handleChange('bookstitle')
    }
    name = "bookstitle"
    variant = "outlined" /
    >
    <TextField required id = "outlined-number"
    label = "Prise"
    type = "number"
    className = {
      classes.textField
    }
    onChange = {
      handleChange('price')
    }
    margin = "normal"
    name = "price"
    variant = "outlined" /
    >
    <TextField required id = "filled-multiline-static"
    label = "Discription"
    multiline rows = "4"
    columns = '10'
    name = "discription"
    defaultValue = "Your Discription"
    onChange = {
      handleChange('discription')
    }
    className = {
      classes.textField
    }
    margin = "normal"
    variant = "outlined" /
    >
    <Button variant = "contained"
    color = "primary"
    type = 'submit'
    className = {
      classes.button
    }
    onClick = {
      multiSaveData
    }
    size = "medium" >
    Add Books 
    </Button> 
    </form >
  );
}

export default OutlinedTextFields;