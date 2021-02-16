import './App.css';
import Card from './Card';
import faker from 'faker';

function App() {
  const buttonsMarkup = (
    <div>
      <button class="button button2">YES</button>
      <button class="button button3">NO</button>
    </div>
  );

  return (
    <div className="App">
      <Card
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()} >{buttonsMarkup}
      </Card>
      <Card
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()} >{buttonsMarkup}
      </Card>
      <Card
        avatar={faker.image.avatar()}
        name={`${faker.name.firstName()} ${faker.name.firstName()}`}
        title={faker.name.jobTitle()} >{buttonsMarkup}
      </Card>
    </div>
  );
}

export default App;
