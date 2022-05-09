import React, { useState, useRef, useEffect } from "react";

import * as styles from "../../styles/Global/JoinTheFamily.module.css";
import star from "../../images/FP-star-gold.png";
import axiosWithAuth from "../../utils/axiosWithAuth";
import Button from "../Global/Button";
import { Modal } from "react-bootstrap/esm";

import styled from "styled-components";

export default function JoinTheFamily() {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: send form info & request to backend
    setLoading(true);
    try {
      let payload = {
        FirstName: formInfo.firstName,
        LastName: formInfo.lastName,

        PrimaryEmail: {
          Value: formInfo.email,
          Type: "Home",
        },

        EmailInterestType: "All",
      };

      await axiosWithAuth.post("/constituent", payload);
      handleShow();
    } catch (error) {
      alert("Unable to subscribe, please try again later");
    } finally {
      setLoading(false);
    }

    setFormInfo({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className={styles.sectionContainer}>
      <SubscribedModal
        show={show}
        setShow={setShow}
        handleClose={handleClose}
      />
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Join the family</h2>
          <img src={star} alt="FP Star" />
        </div>
        <p className={styles.p}>
          Ending family homelessness begins with paying attention.
          <br />
          Be the first to hear success stories, ways to get involved and more.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formInputContainer}>
            <input
              name="firstName"
              type="text"
              value={formInfo.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              name="lastName"
              type="text"
              value={formInfo.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
            <input
              name="email"
              type="email"
              value={formInfo.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <button className={styles.submitButton}>
            {loading ? "Submitting.." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

function SubscribedModal({ show, setShow, handleClose }) {
  return (
    <>
      <Modal
        style={{ color: "white" }}
        className="my-modal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton style={{ background: "#8d4982" }}>
          <Modal.Title>
            You've been subscribed to the Family Promise Post!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#8d4982" }}>
          <video width="100%" height="auto" controls>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
        <Modal.Footer style={{ background: "#8d4982" }}>
          <Button color={"gold"} onClick={handleClose}>
            Return to site
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
