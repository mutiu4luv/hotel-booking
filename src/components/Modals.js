// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>jhhg</Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 200 }}>
//           <img
//             src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
//             className="card-img-top"
//             alt="..."
//           />
//           <Button onClick={handleClose}>Close Child Modal</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

// export default function NestedModal() {
//   const [open, setOpen] = React.useState(false);
//   const [picture, setPicture] = React.useState(true);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handlePicture = () => {
//     setPicture(false);
//   };

//   return (
//     <div>
//       <Button onClick={handleOpen}>
//         {" "}
//         <img
//           src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
//           className="card-img-top"
//           alt="..."
//         />
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}>
//           <h2 id="parent-modal-title">{handlePicture}Text in a modal</h2>
//           <p id="parent-modal-description">
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </p>
//           <ChildModal />
//         </Box>
//       </Modal>
//     </div>
//   );
// }
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* Modal heading */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
          <img
            src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
            className="card-img-top"
            alt="..."
          />
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modals() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        <img
          src="https://images.forbes.com/highest-paid-athletes-2022/16x9-hero.jpg"
          className="card-img-top"
          alt="..."
        />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Modals;
