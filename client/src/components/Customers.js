import React, {useState} from 'react';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Buttons from './Buttons';

const Customers = () => {
  const [books, setBooks] = useState([
	    fetch('/api/addbooks')
	    	.then(res => res.json())
	    	.then(books => setBooks([...books, {
	    	books
	    	}]), () => console.log('fetched...!!', books))
  ]);


    const divStyle = {
  display: 'flex',
  marginRight: "100px",
  alignItems:'center',
  fontWeight: "700",
  fontSize: "16px",
};
const removeBooks = (title) => {
	
	console.log("removeBooks start", title);
	
const newbook = [...books];
newbook.splice(title, 1);
setBooks(newbook);
console.log("removeBooks end");
  }

    return (
    < div className = "App" style = {divStyle}>
  	<ol>
    {
    	books.map((books,index) => {
    	return ( <li key={index}>
		{books.author}:
		{books.bookstitle}<Buttons index={books._id} removeBooks={removeBooks}/></li > )
		})
	}
  	</ol>
    </div>
  );
    }


export default Customers;