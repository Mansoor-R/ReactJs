import './App.css';
import Props  from './Components/props';
import PropsList  from './Components/propsList';
import PropsObjectTransfer  from './Components/propsObjectTransfer';

function App() {
  const items = [{
    name : "Product 1",
    price : "$100",
    description : "Ths is product 1." 
  },
  {
    name : "Product 2",
    price : "$200",
    description : "Ths is product 2." 
  },
  {
    name : "Product 3",
    price : "$300",
    description : "Ths is product 3." 
  }
]
  return (
    <div className="App">
      <h2>Examples of pros in Reacts</h2>
      <Props name="Reacts props!" />
      <hr/>
      <h2>Examples of pros in Reacts - Passing the list</h2>
      {/*  Loop can be used instread of hard coding the list */}
      <PropsList name={items[0].name} price={items[0].price} description={items[0].description} />
      <PropsList name={items[1].name} price={items[1].price} description={items[1].description} />
      <PropsList name={items[2].name} price={items[2].price} description={items[2].description} />
      <hr/>
      <h2>Examples of pros in Reacts - Passing the entire data frame</h2>
      <PropsObjectTransfer  item = {items[0]}/>
      <PropsObjectTransfer  item = {items[1]}/>
      <PropsObjectTransfer  item = {items[2]}/>
      <hr/>
      <h2>Examples of pros in Reacts - Passing the data using object destructuring</h2>
      <PropsObjectTransfer  item = {items[0]}/>
      <PropsObjectTransfer  item = {items[1]}/>
      <PropsObjectTransfer  item = {items[2]}/>
    </div>
  );
}
export default App;
