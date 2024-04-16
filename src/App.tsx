import ListGroup from './components/ListGroup'

function App(){
  let items = ["Kaunas", "Vilnius", "Siauliai", "Klaipeda"];

  return <div><ListGroup items={items} heading="Cities" /></div>;
}

export default App;