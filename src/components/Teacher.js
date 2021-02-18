import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Form, FormGroup, Modal, ModalHeader, ModalBody, Label, Input, Col, Breadcrumb, BreadcrumbItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Teacher extends Component {
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
            <div className="container">
                <div className="row">
                    <div class="col-12 col-sm-6">
                        <Breadcrumb>
                            <BreadcrumbItem active>
                                Wellcome as a teacher
                  <p>Insert your plan</p>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        )
    }
}

export default Teacher;

