import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Form, FormGroup, Modal, ModalHeader, ModalBody, Label, Input, Col, Row } from 'reactstrap';
import { NavLink, Link, Router, Route } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Student extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitReserve = this.handleSubmitReserve.bind(this);
  }

  handleSubmitReserve(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('********************************************');

  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-12 col-sm-6">
            <Breadcrumb>
              <BreadcrumbItem active>
                Wellcome as a Student
              <p>Insert your plan</p>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="row">
          <div class="col-12 col-sm-12">

            
              <LocalForm model="feedback" onSubmit={(values) => this.handleSubmitReserve(values)}>
                <Row className="form-group">

                  <Label htmlFor="firstname" sm={2}>First Name</Label>
                  <Col md={2}>
                    <Control.text model=".firstname" id="firstname" name="firstname"
                      placeholder="First Name"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(3), maxLength: maxLength(10)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".firstname"
                      show="touched"
                      messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less'
                      }}
                    />
                  </Col>
                  {/* </Row>
                <Row className="form-group"> */}
                  <Label htmlFor="lastname" sm={2}>Last Name</Label>
                  <Col md={2}>
                    <Control.text model=".lastname" id="lastname" name="lastname"
                      placeholder="Last Name"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(3), maxLength: maxLength(10)
                      }}
                    />
                    {/*                                     <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 10 characters or less'
                                        }}
                                     /> */}
                  </Col>
                  {/* </Row>
                <Row className="form-group"> */}
                  <Label htmlFor="teachersname" sm={2}>teacher's Name</Label>
                  <Col md={2}>
                    <Control.text model=".teachersname" id="teachersname" name="teachersname"
                      placeholder="Last Name"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(3), maxLength: maxLength(10)
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".teachersname"
                      show="touched"
                      messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 10 characters or less'
                      }}
                    />
                  </Col>
                </Row>

                <Row className="form-group">
                  <Label htmlFor="telnum" sm={2}>Tel.</Label>
                  <Col md={2}>
                    <Control.text model=".telnum" id="telnum" name="telnum"
                      placeholder="Tel. Number"
                      className="form-control"
                      validators={{
                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".telnum"
                      show="touched"
                      messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 numbers',
                        maxLength: 'Must be 15 numbers or less',
                        isNumber: 'Must be a number'
                      }}
                    />
                  </Col>
                  {/* </Row>
                <Row className="form-group"> */}
                  <Label htmlFor="email" sm={2}>Email</Label>
                  <Col md={2}>
                    <Control.text model=".email" id="email" name="email"
                      placeholder="Email"
                      className="form-control"
                      validators={{
                        required, validEmail
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".email"
                      show="touched"
                      messages={{
                        required: 'Required',
                        validEmail: 'Invalid Email Address'
                      }}
                    />
                  </Col>
                </Row>

                <Row className="form-group">
                  <Label htmlFor="date" sm={2}>Date</Label>
                  <Col md={2}>
                    <Control.text model=".date" id="date" name="date"
                      placeholder="date"
                      className="form-control"
                      validators={{
                        required
                      }}
                    />
                    {/*                                     <Errors
                                        className="text-danger"
                                        model=".date"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid date '
                                        }}
                                     /> */}
                  </Col>
                  {/* </Row>
                <Row className="form-group"> */}
                  <Label htmlFor="time" sm={2}>time</Label>
                  <Col md={2}>
                    <Control.text model=".time" id="time" name="time"
                      placeholder="time"
                      className="form-control"
                      validators={{
                        required
                      }}
                    />
                    {/*                                     <Errors
                                        className="text-danger"
                                        model=".time"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid time '
                                        }}
                                     /> */}
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Reserve
                                    </Button>
                  </Col>
                </Row>
              </LocalForm>
         

          </div>
        </div>
      </div>
    )
  }
}


export default Student;

