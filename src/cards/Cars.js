import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// const Cars = () => {
function Cars() {
  const [hotels, setHotels] = useState("");

  const hotel = (hotelISelected) => {
    setHotels(hotelISelected);
    console.log(hotel);
    return (
      <div>
        {" "}
        {/* {hotels.map((root) => (
          <div key={hotel._id} onClick={() => hotels(hotel)}> */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* </div>
        ))} */}
        import React from "react";

const BookingScreen = () => {
  return (
    <div
    // style={{
    //   flexWrap: "wrap",
    //   display: "flex",
    // }}
    >
      <div
        className="card"
        style={{
          display: "grid",
          gridTemplateColumns: "3fr, 2",
          gridTemplateRows: "3fr, 2",
          width: "18rem",

          // marginRight: "auto",
          // marginLeft: "auto",
        }}
      >
        <div
          style={{
            flexWrap: "wrap",
            display: "flex",
          }}
        >
          <img
            style={{
              flexWrap: "wrap",
              display: "flex",
            }}
            src="https://t-cf.bstatic.com/xdata/images/hotel/square200/350353535.webp?k=a8b2584758f0c85bfd1e7ceb2a729858874e5bf136b36129d72b8902f2f7f25c&o=&s=1"
            className="card-img-top"
            alt="..."
          />
          {/* <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div> */}
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/square200/250058565.webp?k=d05fc22f57fbdd75de32a1f1c9900035d2ff542b46e42de3c47444c79d4f4c52&o=&s=1"
            className="card-img-top"
            alt="..."
          />
          <img
            src="https://t-cf.bstatic.com/xdata/images/hotel/square200/350353535.webp?k=a8b2584758f0c85bfd1e7ceb2a729858874e5bf136b36129d72b8902f2f7f25c&o=&s=1"
            className="card-img-top"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;

      </div>
    );
  };
}
export default Cars;
