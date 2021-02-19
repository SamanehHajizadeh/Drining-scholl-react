import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Header from "./HeaderComponent";
import Footer from './FooterComponent';
import About from "./AboutComponent";
import Student from "./Student";
import Teacher from "./Teacher";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { fetchStudents,postComment , addComments, fetchDishes, fetchComments, fetchPromos, fetchLeader, postFeedback } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStatetoProps = state => { 
    return{ 
        dishes :state.dishes,
        comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders,
        students : state.students
     } 

 } 

 const mapDispatchToProps = dispatch => ({
   postFeedback: (feedbackId, firstname, lastname, telnum, email, agree, contactType, messages) => dispatch(postFeedback(feedbackId, firstname, lastname, telnum, email, agree, contactType, messages)),
    fetchStudents : () => dispatch(fetchStudents())
  });
 

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStudents();
      }
      
    render() {
        const HomePage = () => {
            return (
                <Home 
                students={this.props.students}
                //student={this.props.students.students.filter((s) => s.featured)[0]}
                //studentLoading={this.props.students.isLoading}
                //studentErrMess={this.props.students.errMess}
            />
            );
        }

        

        return (
            <div className="App">
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                            <Route exact path='/contactus' component={() => <Contact postFeedback={this.props.postFeedback}  />} />
                            <Route exact path="/student" component={Student} />
                            <Route exact path="/teacher" component={Teacher} />
                            <Redirect to="/home" />
                          
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Main));
