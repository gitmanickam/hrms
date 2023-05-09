import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
const baseURL = 'http://localhost:7058/HRMS/get';


function App() {

  //const [isLoading, setLoading] = useState(true);
  //const [data, setData] = useState('');
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  // const getMovies = () => {
  //   var url = 'http://localhost:7058/HRMS/get';

  //   axios
  //     .get(url
  //       , {
  //         method: 'GET',
  //         mode: 'no-cors',
  //         headers: {
  //           'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  //           'Content-Type': 'application/json; charset=utf-8',
  //           'Access-Control-Allow-Origin': '*'
  //         }
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });

  // fetch(url, {
  //   method: 'GET',
  //   mode: 'no-cors',
  //   headers: {
  //     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  //     'Content-Type': 'application/json; charset=utf-8',
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }).then((response) => {
  //   console.log(response);
  //   console.log(response.data);
  //   return response;
  // })
  //   .then((json) => {
  //     console.log(json);
  //   });
  //};

  // useEffect(() => {
  //   getMovies();
  // }, []);

  // return (
  //   <div className="App">
  //     <h1>1Core HRMS</h1>
  //   </div>
  // );

  if (!post) return null;

  return (
    <div>
      <h1>{post.UserName}</h1>
      <p>{post.Password}</p>
    </div>
  );
}



export default App;
