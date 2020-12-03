import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { SalesSummary, Events, Feeds } from "components/dashboard-components";
import Cards from "../ui-components/cards";

const Starter = () => {
  const [data, setData] = useState([]);
  // get data for events whenever page loads
  useEffect(() => {
    setData([
      {
        name: "My Birthday Party",
        category: "Party",
        description: "Join me for my birthday celebration",
        time: "12pm",
        date: "December 3, 2020",
        location: "Orlando",
        phone: "555-1234",
        email: "test@ucf.edu",
      },
      {
        name: "My Birthday Party",
        category: "Party",
        description: "Join me for my birthday celebration",
        time: "12pm",
        date: "December 3, 2020",
        location: "Orlando",
        phone: "555-1234",
        email: "test@ucf.edu",
      },
      {
        name: "My Birthday Party",
        category: "Party",
        description: "Join me for my birthday celebration",
        time: "12pm",
        date: "December 3, 2020",
        location: "Orlando",
        phone: "555-1234",
        email: "test@ucf.edu",
      },
    ]);
  }, []);

  // if theres no events return components that don't show events, otherwise show events
  if (!data)
    return (
      <div>
        <Row>
          <Col sm={6} lg={8}>
            <Events />
          </Col>
          <Col sm={6} lg={4}>
            <Feeds />
          </Col>
        </Row>
      </div>
    );
  else
    return (
      <div>
        <Row>
          <Col sm={6} lg={8}>
            <Events />
          </Col>
          <Col sm={6} lg={4}>
            <Feeds />
          </Col>
        </Row>
        <Row>
          {data.map((card, key) => {
            return (
              <Col lg={4}>
                <Cards
                  key={key}
                  name={card.name}
                  category={card.category}
                  description={card.description}
                  time={card.time}
                  date={card.date}
                  location={card.location}
                  phone={card.phone}
                  email={card.email}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
};

export default Starter;
