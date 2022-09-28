import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./BookingScreen.css";
import React, { useEffect } from "react";

import { Button } from "bootstrap";

import MyVerticallyCenteredModal from "../components/Modals";
import Modals from "../components/Modals";
import axios from "axios";

const BookingScreen = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [rooms, setRooms] = React.useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/hotels");
      console.log(data);
      setRooms(data);
    };
    fetchPosts();
  }, []);

  return (
    <div style={{ width: "100%", background: "#D9D9D9", height: "auto" }}>
      <div>
        <div className="Div-h6-v" varian="h6">
          OUR ROOMS
        </div>
        <hr />
      </div>
      <Carousel>
        <div className="display-div-more">
          {/* {rooms.map((posty) => (
            <div key={posty._id} sm={12} md={6} lg={4} xl={3}> */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://media.istockphoto.com/photos/huge-multi-sports-collage-taekwondo-tennis-soccer-basketball-etc-picture-id1364827675?k=20&m=1364827675&s=612x612&w=0&h=1gskpPjasFLS2pUQsnoo-JlJ9-V1JGq3rorvjbDCGWU="
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* ///// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* /// */}
          <div className="card" style={{ width: "18rem" }}>
            {/* <img
              src="https://icdn.empireofthekop.com/wp-content/uploads/2022/09/Untitled-design-30.jpg"
              className="card-img-top"
              alt="..."
            /> */}

            <button
              className="openModalBtn"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              {" "}
            </button>
            {/* {openModal && <Modal closeModal={setOpenModal} />} */}
          </div>
          {/* ////// */}
          <div className="card" style={{ width: "18rem" }}>
            <Modals />
          </div>
          {/* //// */}
          {/* </Row> */}
        </div>

        <div className="display-div-more">
          {/* <Row sm={12} md={6} lg={4} xl={3}> */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* ///// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* /// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* ////// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* //// */}
          {/* 3rd carousel */}

          {/* </Row> */}
        </div>
        {/* ////3rd */}
        <div className="display-div-more">
          {/* <Row sm={12} md={6} lg={4} xl={3}> */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* ///// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* /// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* ////// */}
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          {/* //// */}
          {/* 3rd carousel */}

          {/* </Row> */}
        </div>
      </Carousel>
    </div>

    ///////////  <div
    //   style={{
    //     borderRadius: "1rem 0 0 1rem",
    //     width: "16rem",
    //     height: "12rem",
    //     display: "grid",
    //     gridTemplateRows: "3fr, 2 ",
    //     gridTemplateColumns: "3fr 2",
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //   }}
    // >
    //   <img
    //     src="https://t-cf.bstatic.com/xdata/images/hotel/square200/250058565.webp?k=d05fc22f57fbdd75de32a1f1c9900035d2ff542b46e42de3c47444c79d4f4c52&o=&s=1"
    //     alt=".."
    //   />
    //   <img
    //     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
    //     alt="login form"
    //     className="img-fluid"
    //   />
    //   <img
    //     src="https://t-cf.bstatic.com/xdata/images/hotel/square200/350353535.webp?k=a8b2584758f0c85bfd1e7ceb2a729858874e5bf136b36129d72b8902f2f7f25c&o=&s=1"
    //     alt=".."
    //   />
    //   <img
    //     src="https://t-cf.bstatic.com/xdata/images/hotel/square200/250058565.webp?k=d05fc22f57fbdd75de32a1f1c9900035d2ff542b46e42de3c47444c79d4f4c52&o=&s=1"
    //     alt=".."
    //   />
    // </div>
  );
};

export default BookingScreen;
