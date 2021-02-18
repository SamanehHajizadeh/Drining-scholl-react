import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import { NavLink , Link, Router, Route} from 'react-router-dom';


function RenderPerson({ items, isLoading, errMess }) {

    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }
    else
        if (items != null){
            return (
                <div className="col-12 col-md-5 m-1">
                    <div>
                        <h4>Comments</h4>

                        {items.map((item) => {
                            return (
                                <Card>
                                    <CardImg src={baseUrl + item.image} alt={item.name} />
                                    <CardBody>
                                        <CardTitle></CardTitle>
                                        {/* {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null } */}
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
                            );
                        }
                        )
                        }

                    </div>
                </div>
            )
        }else return(
            <div>
                ************************************
            </div>
        )
            

}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                 <div className="col-12 col-md m-1">
                 <RenderPerson item={props.students}  isLoading={props.studentLoading} errMess={props.dishesErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                <Link to="/student" class="btn-default btn-info btn-sm btn-block">Student</Link>
                </div>
                <div className="col-12 col-md m-1">
                    <Link to="/teacher" class="btn-teacher btn-info btn-sm btn-block">teacher</Link>  
                </div> 
 
            </div>
        </div>
    );
}

export default Home;