import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./jet.css";

const Jet = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/hotels");
      console.log(data);
      setHotels(data);
    };
    fetchPosts();
  }, []);
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     flexWrap: "wrap",
    //   }}
    // >
    //   {hotels.map((posty) => (
    //     <div key={posty._id} sm={12} md={6} lg={4} xl={3}>
    //       <Card
    //         style={{
    //           width: "18rem",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <Card.Img variant="top" src="holder.js/100px180" />
    //         <Card.Body>
    //           <Card.Title>{posty.name}</Card.Title>
    //           <Card.Text>{posty.desc}</Card.Text>
    //           <Link
    //             style={{ textDecoration: "none", color: "gray" }}
    //             to={`/hotels/${posty?._id}`}
    //           >
    //             <Button variant="primary">{posty.name}</Button>
    //           </Link>
    //         </Card.Body>
    //       </Card>
    //       <h6> </h6>
    //       <h6> </h6>
    //     </div>
    //   ))}
    // </div>
    <div style={{ width: "100%", background: "#D9D9D9", height: "auto" }}>
      <div>
        <div className="Div-h6-v" varian="h6">
          BOOK A HOTEL
        </div>
        <hr />
      </div>
      <Carousel>
        <div className="display-div-more">
          {hotels.map((posty) => (
            <div key={posty._id} sm={12} md={6} lg={4} xl={3}>
              <div
                className="cards"
                // style={{
                //   display: "flex",
                //   justifyContent: "center",
                //   flexWrap: "wrap",
                // }}
              >
                {/* <Row sm={12} md={6} lg={4} xl={3}> */}
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src="https://media.istockphoto.com/photos/huge-multi-sports-collage-taekwondo-tennis-soccer-basketball-etc-picture-id1364827675?k=20&m=1364827675&s=612x612&w=0&h=1gskpPjasFLS2pUQsnoo-JlJ9-V1JGq3rorvjbDCGWU="
                    className="card-img-top"
                    alt="..."
                  />
                  <div>
                    <Card.Title>{posty.name}</Card.Title>
                    <Card.Text>{posty.desc}</Card.Text>
                    <Link
                      style={{ textDecoration: "none", color: "gray" }}
                      to={`/hotels/${posty?._id}`}
                    >
                      <Button variant="primary">{posty.name}</Button>
                    </Link>

                    <p className="card-text">{posty.desc}</p>
                  </div>
                </div>
                {/* ///// */}

                {/* //// */}
                {/* 3rd carousel */}

                {/* </Row> */}
              </div>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default Jet;
