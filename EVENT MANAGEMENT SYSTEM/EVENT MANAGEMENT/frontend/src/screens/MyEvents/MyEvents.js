import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import events from "../../data/events";

const MyEvents = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure?")) {
    }
  };
  return (
    <MainScreen title="Welcome Back Navindu Praveen...">
      <Link to="createevent">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Event
        </Button>
      </Link>
      {events.map((event) => (
        <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDescription: "none",
                flex: 1,
                cusor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              {event.title}
            </span>

            <div>
              <Button href={`/event/${event._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(event._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <h4>
              <Badge bg="success">Category - {event.category}</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>{event.content}</p>

              <footer className="blockquote-footer">Created On - date</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyEvents;
