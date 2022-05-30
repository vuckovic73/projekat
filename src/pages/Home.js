import {Container, Row, Col, Carousel} from 'react-bootstrap';



const Home = () => {
    
      
    
      
    return (

        <>

            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mt-3">Pocetna strana</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Carousel fade>
                      <Carousel.Item>
                        <img
                          height={"450px"}
                          className="d-block w-100"
                          src="https://cdn.pixabay.com/photo/2022/04/11/16/29/coffee-beans-7126154_960_720.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>Kafa</h3>
                          
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          height={"450px"}
                          src="https://cdn.pixabay.com/photo/2022/01/25/08/26/animal-6965596_960_720.jpg"
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Jelen</h3>
                          
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          height={"450px"}
                          src="https://cdn.pixabay.com/photo/2022/04/27/07/44/paris-7159870_960_720.jpg"
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Pariz</h3>
                          
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>

            
            
        </>
    );
  };
  
  export default Home;
