import React, { useState, useEffect } from "react";
import "./css/App.css";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import axios from "axios";


function Countries() {
  useEffect(() => {
    fetchItems();
  }, []); 
  var history=[];

  const addToHistory = (country) => {    
    if (localStorage.getItem("history") === null || localStorage.getItem("history") === null) {
      history.push(country);
      localStorage.setItem("history",JSON.stringify(history));
  }
  else {
      history = JSON.parse(localStorage.getItem("history"));
      if (history.length>4)  {
        history.shift();
      }
      
      if (!history.includes(country)) {
          history.push(country);
      localStorage.setItem("history",JSON.stringify(history));
      }
    }
  }

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const result = await axios(
        `https://coronavirus-19-api.herokuapp.com/countries/`
      );
      setItems(result.data);
      console.log(items);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <div>
      <h2>Current COVID-19 numbers in the world:</h2>
      <Table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.country}>
                <td>{item.country}</td>
                <td>{item.cases}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
                <td><Link to={`/countries/${item.country}`} ><Button onClick={()=>addToHistory(item.country)}  > Detail </Button></Link></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Countries;
