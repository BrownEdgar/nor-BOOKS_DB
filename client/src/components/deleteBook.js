import React from 'react';
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
    width: 400,
  },
}));


export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'H.Tumanyan',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    //????
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
       <TextField
        required
        fullWidth
        id="filled-search"
        label="Enter Book ID"
        type="search"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}
