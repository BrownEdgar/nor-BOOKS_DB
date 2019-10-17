import React, {useState} from 'react';
/*import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';*/
import Buttons from './Buttons';

const Customers = () => {
  const [books, setBooks] = useState([
	    fetch('/api/addbooks')
	    	.then(res => res.json())
	    	.then(books => setBooks([...books, {
	    	books
	    	}]), () => console.log('fetched...!!', books))
  ]);
  const addBooks = (title) => {
  	setBooks([...books, {
  		title
  	}])
  }

    const divStyle = {
  display: 'flex',
  marginRight: "100px",
  alignItems:'center',
  fontWeight: "700",
  fontSize: "16px",
};
    return (
    < div className = "App"
    style = {
    	divStyle
    }>
  	<ol>
    {
    	books.map(books => {
    	return ( <li  key = {books._id}>
		{books.author}:
		{books.bookstitle} <Buttons id={books._id}/></li>)
		})}
  	</ol>
    </div>
  );
    }


export default Customers;