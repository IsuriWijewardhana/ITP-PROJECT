//import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes, {} from "../../data/notes";

const MyNotes = () => {
  const deleteHandler = (id) =>{
    if(window.confirm("Are you sure?")){

    }
  };

 // const fetchNotes= async() =>{
   // const data=await axios.get()
 // }

  //useEffect(() =>{
    

 // },[])


  return (
    <MainScreen title="Welcome Back Nimal D Silva..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Nimal D Silva
        </Button>
        {
              notes.map( note =>(
                <Card style={{margin:10}}>
                <Card.Header style={{display:"flex"}}>
                  <span
                    
                      style={{
                        color:"black",
                        textDecoration:"none",
                        flex:1,
                        cursor:"pointer",
                        alignSelf:"center",
                        fontSize:18,
                      }}
                      
                    >
                    
                  {note.title}
                  </span>
                
                <div>
                  <Button>Edit</Button>
                  <Button variant="danger" className="mx-2">View</Button>
                  
                </div>
                </Card.Header>
              </Card>
              ))
        }
        
      </Link>
    </MainScreen>
  );
};

export default MyNotes;