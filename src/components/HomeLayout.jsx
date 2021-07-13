import React from 'react'

function HomeLayout() {

    const stateName="Kentucky"
  
    return (
      <>
  <div className="container border text-center align-middle mt-3">
    <div className="row">
      <div className="col-sm">
      Home Page (icon)
      </div>
      <div className="col-sm">
      <h1>LOGO</h1>
      </div>
      <div className="col-sm">
      <Button style={{marginRight: '10px'}}>Sign Up</Button><Button>Login</Button>
      </div>
    </div>
  </div>
  
  <div className="container border text-center align-middle" style={{height: "533px", backgroundColor: '#E0FCE6'}}> 
  <h1 className="mb-4" style={{marginTop: '15%', }}>Find your next National Park</h1>
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>
  
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Alaska</Dropdown.Item>
      <Dropdown.Item href="#/action-2">California</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Oklahoma</Dropdown.Item>
      <Dropdown.Item href="#/action-3">State 4</Dropdown.Item>
      <Dropdown.Item href="#/action-3">State 5</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  
  </div>
  
    <div className="container border">
    <div className="row border">
      <h3>Local favorites near {stateName}</h3>
    </div>
    <div className="row border">
      {/* Card */}
  <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
      {/* Card */}
      <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
      {/* Card */}
      <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
      {/* Card */}
      <Card style={{ width: '25%' }}>
    <Card.Img variant="top" src="https://picsum.photos/100/100" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    {/* Card end */}
    </div>
    </div>
  
  <div className="container border mt-10" style={{marginTop: '15px'}}>
    <div className="row">
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Hiking</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Fishing</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Mountain Biking</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Bird Watching</p>
    </div>
    <div className="col-sm border border-primary text-center">
    <img src="https://picsum.photos/150/150" className="rounded-circle" />
    <p>Backpacking</p>
    </div>
    </div>
  </div>
  
  <footer style={{height: '75px'}} className="container border text-center align-middle">
    <div>c 2021 - FOOTER INFO</div>
  </footer>
  
      </>
    );
  }

export default HomeLayout
