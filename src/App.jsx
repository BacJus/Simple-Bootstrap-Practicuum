import { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

function App() {
  const [favorite, setFavorite] = useState("")

  return (
    <div className="App">
      <h1>Ice Cream Flavors</h1>
      <h3>Choose Your Favorite Flavor!</h3>

      <Button
        variant="primary"
        onClick={() => setFavorite("Vanilla")}
      >
        Vanilla
      </Button>{" "}

      <Button
        variant="danger"
        onClick={() => setFavorite("Strawberry")}
      >
        Strawberry
      </Button>{" "}

      <Button
        variant="warning"
        onClick={() => setFavorite("Chocolate")}
      >
        Chocolate
      </Button>{" "}

      <h4>Your Favorite: {favorite || "None selected"}</h4>
      <h3>Ice Cream Info</h3>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Vanilla</Accordion.Header>
          <Accordion.Body>
            Vanilla is a classic flavor made with vanilla extract. It is sweet and creamy.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Strawberry</Accordion.Header>
          <Accordion.Body>
            Strawberry flavor is made with strawberries. It is sweet and fruity.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Chocolate</Accordion.Header>
          <Accordion.Body>
            Chocolate flavor is made with cocoa beans. It is rich and sweet.
          </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </div>
  );
}

export default App;
