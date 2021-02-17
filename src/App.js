import { useState } from 'react';
import './App.css';
import Card from './Card';
import faker from 'faker';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

console.log(generator.generateRandomAvatar())



function App() {
  const [cards, setCards] = useState([
    {
      id: 'adf1a',
      name: 'Damaris Schuster',
      title: 'International Operation Producer',
      avatar: 'https://avataaars.io/?accessoriesType=Wayfarers&avatarStyle=Circle&clotheColor=PastelBlue&clotheType=BlazerSweater&eyeType=Close&eyebrowType=Angry&facialHairColor=Auburn&facialHairType=BeardLight&hairColor=PastelPink&hatColor=Gray02&mouthType=Sad&skinColor=Black&topType=ShortHairShortFlat'
    },
    {
      id: 'a3dfa',
      name: 'Bartholome Dietriich',
      title: 'Future Security Developer',
      avatar: 'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray02&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=RaisedExcited&facialHairColor=Black&facialHairType=BeardLight&hairColor=SilverGray&hatColor=White&mouthType=Eating&skinColor=Black&topType=WinterHat4'
    },
    {
      id: 'ad2fa',
      name: 'Pattie Miller',
      title: 'Forwarnd Metrics Analysys',
      avatar: 'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Blue03&clotheType=GraphicShirt&eyeType=EyeRoll&eyebrowType=SadConcerned&facialHairColor=BrownDark&facialHairType=MoustacheMagnum&hairColor=Auburn&hatColor=Pink&mouthType=Smile&skinColor=DarkBrown&topType=ShortHairTheCaesar'
    },
  ])
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards];
    cards_copy.splice(cardIndex, 1);
    console.log('cards_copy', cards_copy)
    console.log('cards', cards)
    setCards(cards_copy);
  };

  const cardsMarkup = showCard && (cards.map((card, index) => <Card
    avatar={card.avatar}
    name={card.name}
    title={card.title}
    key={card.id}
    onDelete={() => {deleteCardHandler(index)}}
  />)
  );

  return (
    <div className="App">
      <button className='button' onClick={toggleShowCard} >Toggle show/hide</button>
      {cardsMarkup}
    </div>
  );
}

export default App;
