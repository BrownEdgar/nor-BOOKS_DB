import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:"center",
    alignItems: "center",
    marginTop:"5%",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    password: '',

  });

  const handleChange = email => event => {
    setValues({ ...values, [email]: event.target.value });
  };
    const saveData = () => {
          fetch('/login',{
            method: 'post',
            headers: {
        
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then(res => res.json())
            .then((res) => {
                console.log(res);
            })
            .catch(res => console.log(res));
    };

  return (
    <form className={classes.container} noValidate autoComplete="off">

      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        onChange={handleChange('email')}
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        name="password"
        onChange={handleChange('password')}
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
      <Button 
      variant="contained" 
      color="primary" 
      className={classes.button} 
      href="/login"
      aria-controls="customized-menu"
      aria-haspopup="true"
      onClick={saveData}
      size='large'>
        Login
      </Button>
    </form>
  );
}
