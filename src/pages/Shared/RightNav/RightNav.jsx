import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div>
        <h4 className="mt-4">Login with</h4>
        <Button variant="outline-primary" className="mb-2 w-100">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary" className="mb-2 w-100">
          <FaGithub /> Login with GitHub
        </Button>
      </div>
      <div>
        <h4 className="mt-4">Find Us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram>Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="mt-2">
        <QZone></QZone>
      </div>
      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="position-absolute top-0 text-white text-center mt-5 mx-3">
          <h1>Create an Amazing Newspaper</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui accusantium, ea nihil hic fugit quaerat
            exercitationem! Praesentium non reprehenderit unde!
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
