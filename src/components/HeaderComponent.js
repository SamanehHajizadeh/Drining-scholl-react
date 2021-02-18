import React, { Component } from 'react';
<<<<<<< HEAD
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Form, FormGroup, Modal, ModalHeader, ModalBody, Label, Input, Col } from 'reactstrap';
import { NavLink , Link, Router, Route} from 'react-router-dom';
import Student from "./Student";
=======
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Form, FormGroup,FormFeedback, Modal, ModalHeader, ModalBody, Label, Input, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
>>>>>>> parent of 2eb8332... Building and Deploying the React Application.

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isNavOpen: false,
          isModalOpen: false,
          isModalStudentOpen: false,
          isModalTeacherOpen: false,
        };

        this.toggleModalStudent = this.toggleModalStudent.bind(this);
        this.handleLoginForStudent = this.handleLoginForStudent.bind(this);
        this.toggleModalTeacher = this.toggleModalTeacher.bind(this);
        this.handleLoginForTeacher = this.handleLoginTeacher.bind(this);
      }

      toggleModalStudent() {
        this.setState({
          isModalStudentOpen: !this.state.isModalStudentOpen
        });
      }

      toggleModalTeacher() {
        this.setState({
          isModalStudentOpen: !this.state.isModalStudentOpen
        });
      }

    handleLoginForStudent(event) {
        this.toggleModalStudent();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    handleLoginTeacher(event) {
        this.toggleModalTeacher();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
      
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/bilLogo.jpg' height="30" width="41"
                                alt='Ristorante Con Fusion' />
                        </NavbarBrand >
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                                <NavItem >
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/student'><span className="fa fa-address-card fa-lg"></span> Student</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/teacher'><span className="fa fa-address-card fa-lg"></span> teacher</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div class="col-12 col-sm-6">
                                <h3>Wellcome to Saman's driving school</h3>
                                <span class="d-none d-sm-inline">
                                    <p>Here, we register you and make a personal plan for you.</p>
                                    <p>The student will do a test by one of the teachers, and related teacher is going to estimate a plan for U!</p>
                                </span>
                            </div>
                            <div class="col-12 col-sm-3 align-self-center">
                                <img src="assets/images/bilLogo.jpg" height="180" width="181" class="img-fluid align-self-center"></img>
                            </div>

                            <div class="col-12 col-sm-3 align-self-center">
                           <button type="submit"  class="btn-teacher btn-info btn-sm btn-block" outline onClick={this.toggleModalTeacher}>teacher</button>
                            <button type="submit"  class="btn-default btn-info btn-sm btn-block" outline onClick={this.toggleModalStudent}>Student</button> 
                            {/* <button type="submit"  class="btn-default btn-info btn-sm btn-block" outline onClick={this.}>I am Student</button> 
                                <Link to="/student" class="btn-default btn-info btn-sm btn-block">Student</Link> 
                              <Link to="/teacher" class="btn-teacher btn-info btn-sm btn-block">teacher</Link>  */}
                            </div>     

                        </div>
                        
                    </div>
                </Jumbotron>

                <Modal isOpen = {this.state.isModalStudentOpen} toggleModalStudent = {this.toggleModalStudent} >
                    <ModalHeader toggleModalStudent = {this.toggleModalStudent} >Login as Student</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLoginForStudent}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
   
                <Modal isOpen = {this.state.isModalTeacherOpen} toggleModalTeacher = {this.toggleModalTeacher} >
                    <ModalHeader toggleModalTeacher= {this.toggleModalTeacher} >Login as Teacher</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLoginTeacher}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header;
