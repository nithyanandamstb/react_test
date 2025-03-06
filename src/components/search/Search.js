import React from "react";
import "./Search.scss";
import { Row, Col } from 'react-bootstrap';
/**
 * 
 * THIS IS SEARCH COMPONENT
 */

function Search() {

    const bedrooms = [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
        { id: 3, name: 'Three' }
    ];

    const neighbourhoods = [
        { id: 1, name: 'Neighbourhood 1' },
        { id: 2, name: 'Neighbourhood 2' }
    ];

    const minPrice = [
        { id: 1, name: 'Greater than 500000' },
        { id: 2, name: 'Greater than 1000000' },
        { id: 3, name: 'Greater than 1500000' }
    ];

    const maxPrice = [
        { id: 1, name: 'Greater than 500000' },
        { id: 2, name: 'Greater than 1000000' },
        { id: 3, name: 'Greater than 1500000' }
    ];

    return (
        <form className="form-inline">
            <Row>
                <Col className='col-lg-2 col-6'>
                    <select className="custom-select bedroom-sel" >
                        <option selected>All Bedrooms</option>
                        {bedrooms.map(bedroom => (
                            <option key={bedroom.id} value={bedroom.id}>{bedroom.name}</option>
                        ))}
                    </select>
                </Col>
                <Col className='col-lg-2 col-6'>
                    <select className="custom-select neighbourhood-sel" >
                        <option selected>Any Neighbourhood</option>
                        {neighbourhoods.map(neighbourhood => (
                            <option key={neighbourhood.id} value={neighbourhood.id}>{neighbourhood.name}</option>
                        ))}
                    </select>
                </Col>
                <Col className='col-lg-2 col-6'>
                    <select className="custom-select" >
                        <option selected>Min Price</option>
                        {minPrice.map(min => (
                            <option key={min.id} value={min.name}>{min.name}</option>
                        ))}
                    </select>
                </Col>
                <Col className='col-lg-2 col-6'>
                    <select className="custom-select" >
                        <option selected>Max Price</option>
                        {maxPrice.map(max => (
                            <option key={max.id} value={max.name}>{max.name}</option>
                        ))}
                    </select>
                </Col>
                <Col className='col-lg-2 col-6'>
                    <select className="custom-select" >
                        <option selected>Sort by</option>
                        <option value="price_asc">Price Asc</option>
                        <option value="price_desc">Price Desc</option>
                    </select>
                </Col>
                <Col className='col-lg-2 col-6 text-center'>
                    <div className="result-cout">23 Results</div>
                </Col>
            </Row>
        </form>
    );
}

export default Search;