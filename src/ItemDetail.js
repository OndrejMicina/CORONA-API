import React, { useState, useEffect } from "react";
import "./css/App.css";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardText,
  Badge,
} from "reactstrap";
import { Alert } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    try {
      const result = await axios(
        `https://coronavirus-19-api.herokuapp.com/countries/${match.params.id}`
      );
      setItem(result.data);
      console.log(item);
    } catch ({ message }) {
      console.log(message);
    }
  };

  return (
    <Card>
      <CardHeader tag="h3">{item.country} </CardHeader>
      <CardBody>
        <CardText>
          <Alert color="info">
            <b>Cases: </b>
            {item.cases} <Badge color="warning">{item.todayCases} today</Badge>
          </Alert>
        </CardText>
        <CardText>
          <Alert color="danger">
            <b>Deaths: </b>
            {item.deaths} <Badge color="warning">{item.todayDeaths} today</Badge>
          </Alert>
        </CardText>
        <CardText>
          <Alert color="success">
            <b>Recovered: </b>
            {item.recovered}
          </Alert>
        </CardText>
        <CardText>
          <Alert color="secondary">
            <b>Active: </b>
            {item.active}
          </Alert>
        </CardText>
        <CardText>
          <Alert color="warning">
            <b>Critical: </b>
            {item.critical}
          </Alert>
        </CardText>
        <CardText>
          <Alert color="secondary">
            <b>Total tests: </b>
            {item.totalTests}
          </Alert>
        </CardText>

        <Link to="/countries">
          <Button> Countries</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ItemDetail;
