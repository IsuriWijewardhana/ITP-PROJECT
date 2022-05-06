import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
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
        <Accordion>
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
                <Accordion.Button as={Card.Text} variant="link" eventKey="0">
                  {event.title}
                </Accordion.Button>
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
            <Accordion.Body>
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {event.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{event.content}</p>

                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyEvents;
