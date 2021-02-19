import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, CardImg, CardText, CardTitle, CardSubtitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function About(props) {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Vi utbildar elever i B, BE samt B96 behörighet, vi kör med både manuell och automatväxel efter era önskemål. </p>
                    <p>Vi håller även Introkurs/handledarutbildning samt Riskettan. En körlektion (B) hos oss är 40 min lång och vi kör</p>
                    <p> på vardagar med start kl 08.00, sista lektionen körs med start kl 16.40. </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2020</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">AB utbildar Inc.</dd>
                                <dt className="col-6">Elever</dt>
                                <dd className="col-6">40</dd>
                                <dt className="col-6">Larare</dt>
                                <dd className="col-6">4</dd>

                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Every moment is a fresh beginning.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra, 2020</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-12">
                    
                </div>
                <div className="col-12 col-md-12">
                  
                </div>
            </div>
        </div>
    );
}

export default About;    
