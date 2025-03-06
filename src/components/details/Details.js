import React from "react";
import { Row, Col } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Container from 'react-bootstrap/Container';
import Search from '../search/Search';
import DummyImg from '../../dummy.svg';
import FemaleContact from '../../femalecontact.jpg';
import Mapview from '../map/Map';
import './Details.scss';
import axios from "axios";
import { FaHeart, FaShare, FaHome } from "react-icons/fa";


/**
 * 
 * THIS IS PROPERTY DETAILS COMPONENT
 * 
 */

function Details() {
    let params = useParams();
    const [item, setItems] = React.useState([]);
    React.useEffect(() => {
        getItems()
    }, [])
    const getItems = () => {
        /**
         * GET PROPERTIES
         */
        axios.get("https://mira-strapi-dev.q.starberry.com/api/properties?filters[id][$eq]=" + params.id)
            .then(function (response) {
                console.log(response.data.data[0]);
                setItems(response.data.data[0])
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div className="inner-container mt-5 property-details">
                    <Row>
                        <Col className='col-12 col-lg-6'>
                            <Row>
                                <Col className='col-12 mb-3'>
                                    <div className="card">
                                        <img className="card-img-top" src={item?.attributes?.images[0]?.srcUrl ? item.attributes.images[0].srcUrl : DummyImg} alt="Card image cap" />
                                    </div>
                                </Col>
                                <Col className='col-6 prop-small-img'>
                                    <div className="card">
                                        <img className="card-img-top" src={item?.attributes?.images[0]?.srcUrl ? item.attributes.images[0].srcUrl : DummyImg} alt="Card image cap" />
                                    </div>
                                </Col>
                                <Col className='col-6 prop-small-img'>
                                    <div className="card">
                                        <img className="card-img-top" src={item?.attributes?.images[0]?.srcUrl ? item.attributes.images[0].srcUrl : DummyImg} alt="Card image cap" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='col-12 col-lg-6'>
                            <div className="text-right fa-section" >
                                <FaHeart />&nbsp;<FaShare />
                            </div>
                            <hr />
                            <div>
                                <h1 className="price mb-3">€{item?.attributes?.price ? item?.attributes?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''}  <span className="h1-span">{item?.attributes?.bedroom} bed</span><span className="h1-span">|</span><span className="h1-span">{item?.attributes?.bathroom} bath</span></h1>
                                <div className="des mb-3">{item?.attributes?.title} in {item?.attributes?.address?.address2}</div>
                                <div className="des mb-3 linkfa"><FaHome /> <Link to="#" className="contact-link" >Please Contact us</Link></div>
                                <div className="button mb-3">
                                    <button className="btn contact-button">CONTACT AGENT</button>
                                </div>
                                <div>
                                    FACTS AND FEATURES
                                </div>
                                <hr />
                                <div className="mb-3">
                                    <Row>
                                        <Col className='col-3'>
                                            <div className="facts-div">Neighborhood:</div>
                                        </Col>
                                        <Col className='col-9'>
                                            <div className="facts-details-div">{item?.attributes?.address?.address1}</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='col-3'>
                                            <div className="facts-div">Price per sqft:</div>
                                        </Col>
                                        <Col className='col-9'>
                                            <div className="facts-details-div">3793</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='col-3'>
                                            <div className="facts-div">Broucher:</div>
                                        </Col>
                                        <Col className='col-9'>
                                            <div className="facts-details-div"><Link to="#" className="download-link">Download Broucher</Link></div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='col-3'>
                                            <div className="facts-div">Floor:</div>
                                        </Col>
                                        <Col className='col-9'>
                                            <div className="facts-details-div"><Link to="#" className="download-link">View Floorplan</Link></div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="mb-4">
                                    <p>{item?.attributes?.description}</p>
                                </div>
                                <div className="agent-contact ">
                                    <div> <img src={FemaleContact} /></div>
                                    <div className="agent-details mt-2 mb-4">
                                        <h2 className="agent-name">{item?.attributes?.negotiator_id}</h2>
                                        <h2>Real Estate Broker</h2>
                                        <h2><a href="tel:+37793258666" className="download-link">+377 93 25 86 66</a><span> | </span><a className="download-link" href="#">Email</a></h2>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <Mapview />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Details;