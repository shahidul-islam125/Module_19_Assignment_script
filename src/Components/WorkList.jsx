import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/WorkList.css'; 
import '../assets/css/CounterStyle.css'; 

const WorkList = () => {


    const [workList, setWorkList] = useState([]); 

    useEffect(() => {
        fetch("database/workList.json")
            .then(res => res.json())
            .then(data => setWorkList(data))
            .catch(error => console.error('Error fetching work list:', error));
    }, []);

    
    const [counters, setCounters] = useState([]); 

    useEffect(() => {
        fetch("database/counterList.json")
            .then(res => res.json())
            .then(data => setCounters(data))
            .catch(error => console.error('Error fetching work list:', error));
    }, []);

    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Work List</h2>
            <p className="text-center mb-5">We provide the perfect solution to your business growth</p>

            <Row className="text-center">
                {workList.map((item, index) => (
                    <Col key={index} xs={12} md={4} className="mb-4">
                        <div className="work-item">
                            <div className="work-item-inner">
                                <img src={item.icon} alt={item.title} className="work-icon" />
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <Button variant="primary">
                                    Learn more <FontAwesomeIcon icon={faArrowRight} />
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <br/>
            <br/>
            <h2 className="text-center mb-4">Our Achievements</h2>
            <Row className="text-center">
                {counters.map((counter, index) => (
                <Col key={index} xs={12} md={3} className="mb-4">
                    <div className="counter-item">
                    <div className='icon-style'><img src={counter.icon}/></div>
                        <br/>
                    <h3>{counter.number}</h3>
                    <p>{counter.text}</p>
                    </div>
                </Col>
                ))}
            </Row>
        </Container>
    );
};

export default WorkList;
