import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState ,useEffect} from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import '../styles/Contact.css'
import {useNavigate} from "react-router-dom"


function Blog() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div className="Blog">
     <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5  rounded">
          <div class="row ">

            <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">

                <form class="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search Contact"   />

                </form>
              </div>
            </div>
            <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "" }}><h2><b>Blogs</b></h2></div>
            <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add Blog
              </Button>
            </div>
          </div>
          <div class="row">
            <div class="table-responsive " >
              <table class="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Description </th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  


                </tbody>
              </table>
            </div>
          </div>

          {/* <!--- Model Box ---> */}
          <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add New Blog</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div class="form-group">
                    <input type="number" class="form-control"   placeholder="Enter Subject" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="text-aria" class="form-control"     placeholder="Enter Description" />
                  </div>
                  <div class="form-group mt-3">
                    <input type="Date" class="form-control"   placeholder="Entre Date" />
                  </div>
                  

                  <button type="submit" class="btn btn-success mt-4"  >Add </button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

              </Modal.Footer>
            </Modal>

            {/* Model Box Finsihs */}
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Blog;
