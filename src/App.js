import { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();



function App() {
  const [name, setName] = useState('Alan Smith');
  const [showCard, setShowCard] = useState(true);

  

  

  const changeNameHandler = name => setName(name)

  const ChangeInputHandler = event => setName(event.target.value)
  const toggleShowCard = () => setShowCard(!showCard);

  const buttonsMarkup = (
    <div>
      <button className="button button2">YES</button>
      <button className="button button3">NO</button>
    </div>
  );
  const cardsMarkup = (showCard && <Card
    avatar='https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=PastelBlue&clotheType=BlazerSweater&eyeType=Close&eyebrowType=Angry&facialHairColor=Auburn&facialHairType=BeardLight&hairColor=PastelPink&hatColor=Gray02&mouthType=Sad&skinColor=Black&topType=ShortHairShortFlat'
    name={name}
    onChangeName={() => changeNameHandler('Michael Chan')}
    onChangeInput={ChangeInputHandler}
    title='Dynamic Accounts Specialist' >{buttonsMarkup} 
  </Card>);

  return (
    <div className="App">
      <button className='button' onClick={toggleShowCard} >Toggle show/hide</button>
      {cardsMarkup}
    </div>
  );
}

export default App;
