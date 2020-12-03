import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns,
  CardGroup,
  CardDeck,
  CardLink,
  CardHeader,
  CardFooter,
  Button,
  Row,
  Col,
} from "reactstrap";

const Cards = ({
  name,
  category,
  description,
  time,
  date,
  location,
  phone,
  email,
}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>
          {category} - {time} - {date} - {location}
        </CardSubtitle>
        <CardText>{description}</CardText>
        <Button style={{ marginRight: "5vh" }}>{phone}</Button>
        <Button>{email}</Button>
      </CardBody>
    </Card>
  );
};

export default Cards;
