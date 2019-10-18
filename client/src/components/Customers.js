import React, {useState,useEffect} from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';
import EditBooksBtn from './EditButtons';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    flexWrap: 'wrap',
  },
  divStyle:{
    display: 'flex',
  marginRight: "100px",
  alignItems:'center',
  fontWeight: "700",
  fontSize: "16px",
  }
}));
const Customers = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [editBooks, setEditBooks] = useState([]);
 async function fetchUrl(url) {
    const response = await fetch(url);
    const json = await response.json();
    setBooks(json);
   
  }
    useEffect(() => {
    fetchUrl('/api/addbooks');
  }, []);

const editingBooks = (index) => {
  const newBookList = books.filter(item => {
    return item.index !== index;
  });
  setEditBooks(newBookList);  
}
const removeBooks = (title) => {
const newbook = [...books];
newbook.splice(title, 1);
setBooks(newbook);
}

    return (
    < div className = "App" className = {classes.divStyle}>
  	<ol>
    {
    	books.map((books,index) => {
    	return ( <li key={index}>
		{books.author}:
    {books.bookstitle}
    <div className = {classes.container}>
    <EditBooksBtn index={books._id} editingBooks={editingBooks}/>
    <Buttons index={books._id} removeBooks={removeBooks} />
    </div>
    </li > )})
	}
  	</ol>
    </div>
  );
    }


export default Customers;