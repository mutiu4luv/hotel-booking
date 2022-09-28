import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  // const Cards = () => {
  const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/hotels").then((response) => {
  //     if (!response.data) {
  //       setHotels(response.data.hotels);
  //       console.log(response.data);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/hotels");
      console.log(data);
      setHotels(data);
    };
    fetchPosts();
  }, []);

  const hotel = (hotelISelected) => {
    setHotels(hotelISelected);
    console.log(hotel);
    return (
      <div>
        <div>hekkekk</div>
        {/* {hotels.map((root) => (
          <div key={root._id} onClick={() => hotels(hotel)}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{root.desc}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))} */}
        {/* 
<Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card> */}
        {hotels.map((posty) => (
          <div key={posty._id} sm={12} md={6} lg={4} xl={3}>
            <h6>{posty.desc} </h6>
            <h6>{posty.name} </h6>

            {/* <Image src={`/uploads/${posty.image}`} alt="yi" /> */}
          </div>
        ))}
      </div>
    );
  };
}

export default Cards;
