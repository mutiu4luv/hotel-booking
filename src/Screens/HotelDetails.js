// import React from "react";

// const HotelDetails = () => {
//   return <div>mutiu</div>;
// };

// export default HotelDetails;

import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "bootstrap";

export default function App() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  // const [hotells, setHotels] = useState([]);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`/api/hotels/${id}`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data) {
          setPost(response.data);
          console.log(response.data);

          localStorage.setItem(
            "PostDetails",
            JSON.stringify(response.data._id)
          );
        }
      });
  }, [id]);

  return (
    <MDBCard
      style={{ maxWidth: "740px", marginLeft: "auto", marginRight: "auto" }}
    >
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle style={{ marginLeft: "auto" }}>rating</MDBCardTitle>

            <MDBCardTitle>
              <h5>Hotel:</h5>
              {post.name}
            </MDBCardTitle>
            <MDBCardTitle>
              <h5>city:</h5>
              {post.city}
            </MDBCardTitle>
            <MDBCardTitle> </MDBCardTitle>

            <MDBCardText>
              <h5>DESCRIPTION:</h5> {post.desc}
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">price:{post.cheapestPrice}</small>
            </MDBCardText>
            <Link to="/loginScreen">
              <button style={{ backgroundColor: "blue", color: "white" }}>
                Book Hotel
              </button>
            </Link>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
