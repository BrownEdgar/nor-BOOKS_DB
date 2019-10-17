import React from 'react';
/*import clsx from 'clsx';*/
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';



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
  dense: {
    marginTop: theme.spacing(2),
  },
  button: {
     margin: theme.spacing(1),
     padding: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Enter You name here',
    email: '',
    password: ''
  });


   const handleOnChange = name=>(event) => {
    
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    };
 const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const saveData = () => {
          fetch('/register',{
            method: 'POST',
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
    <form className={classes.container} noValidate autoComplete="off" method="post">
      <TextField
        required
        id="name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleOnChange('name')}
        margin="normal"
        name="name"
        variant="outlined"
      />
      <TextField
      required
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        onChange={handleOnChange('email')}
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
           <TextField
           required
        id="outlined-adornment-password"
        className={classes.textField}
        variant="outlined"
        type={values.showPassword ? 'text' : 'password'}
        label="Password"
        margin="normal"
        name="password"
        value={values.password}
        onChange={handleOnChange('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
          <TextField
        id="outlined-password-input"
        label="ConfirmPassword"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
      <Button 
      variant="contained" 
      color="primary" 
      type='submit'
      className={classes.button} 
      onClick={saveData}
      href="/register"
      size="large">
        Register
      </Button>
 </form>
  );
}
