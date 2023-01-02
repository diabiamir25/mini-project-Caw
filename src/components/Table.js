import React from "react";
import "react-vertical-timeline-component/style.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState ,useEffect} from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
import '../styles/Contact.css'
import Contact from "../pages/Contact";




const Table = ({data}) => {

     function handleDelete(id) {
      this.setUsers(data.filter(user => user.id !== id))
    }


return(


<div class="row">
            <div class="table-responsive " >
              <table class="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name </th>
                    <th>Phone</th>
                    <th>Email </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {

                    data && data.length > 0
                      ?
                      data.map((item) => {

                        return (

                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name} </td>
                            <td>{item.number}</td>
                            <td>{item.email}</td>
                            <td>

                              <a style={{color:"red", cursor: 'pointer'}}  onClick={() => handleDelete(item.id)}><i class="material-icons">&#xE872;</i></a>


                            </td>
                          </tr>


                        );


                      }) : "No Data Available"

                  }


                </tbody>
              </table>
            </div>
          </div>




);





}


export default Table;