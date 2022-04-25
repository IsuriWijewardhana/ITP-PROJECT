import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import notes from "../../data/notes";
import axios from "axios";

const MyNotes = () => {
  /*const fetchNotes = async () => {
    const data = await axios.get("/api/vehicles");
    console.log(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []); */

  return (
    <MainScreen title="Welcome Back...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Add New Vehicle
        </Button>
        {notes.map((note) => (
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>

              <div>
                <Button>Update</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </Card.Header>
          </Card>
        ))}
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
