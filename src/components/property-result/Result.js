import React from "react";
import "./Result.scss";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Search from "../search/Search";
import { Row, Col } from 'react-bootstrap';
import DummyImg from '../../dummy.svg';
import { Link } from "react-router-dom";
import axios from "axios";
/**
 * 
 * THIS IS PROPERTY RESULT COMPONENT
 * 
 */

function PropResult() {
    //var items = Array(10).fill(0);


    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
        getItems()
    }, [])
    const getItems = () => {
        /**
         * GET PROPERTIES
         */
        axios.get("https://mira-strapi-dev.q.starberry.com/api/properties/?_limit=10")
            .then(function (response) {
                console.log(response.data.data);
                setItems(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container-fluid">
            <Header />
            <div className="inner-container prop-result">
                <h1 className="prop-title mb-3">Property for Sales</h1>
                <div className="serach-container">
                    <Search />
                </div>
                <div className="prop-container">
                    <Row>
                        {items.map((item, index) => {
                            return (
                                <>
                                    {item?.attributes?.thumbnail && item?.id != 8 && item?.id != 17 &&
                                        <Col className='col-sm-12 col-12 col-lg-4 col-card mb-4 mt-4'>
                                            {/* <Link to={`/details/${index}`} className="card-link"> */}

                                            <div className="card">
                                                <Link to={`/details/${item.id}`} className="card-link">
                                                    <img className="card-img-top" src={item?.attributes?.images[0]?.srcUrl ? item.attributes.images[0].srcUrl : DummyImg} alt="Card image cap" />
                                                </Link>
                                                <div className="card-body">
                                                    <div className="card-address">{item?.attributes?.address?.address1}</div>
                                                    <div className="card-titles">{item?.attributes?.title}</div>
                                                    <div className="card-price">{item?.attributes?.price ? item?.attributes?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''} {"€"}</div>
                                                </div>
                                            </div>

                                            {/* </Link> */}
                                        </Col>
                                    }
                                </>
                            )

                        })}
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PropResult;