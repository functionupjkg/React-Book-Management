import axios from "axios";

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [book, setBook] = useState({});
  const fetchdata = async () => {
   let res = await axios.get("http://localhost:4000/books");
    setBook(res.data);
    // console.log(book)
  };
  // var data=res.data
  useEffect(() => {
    fetchdata();
  }, []);



  

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      {Object.entries(book).map((items,value) => (
     <div key={items}>
          <h3 >Books</h3>
      {console.log( items[value])}
          {/* <h3 key={items.excerpt}>Excerpt:{items.excerpt}</h3> */}
          {/* <h3>ISBN: </h3>
          <h3>Author: </h3>
          <h3>category: </h3>
          <h3>subcategory: </h3>
          <h3>releasedAt: </h3> */}
        </div>
      ))
      }
       {error && <p>{error}</p>}
      <div></div>
    </div>
  );
};

export default Dashboard;
