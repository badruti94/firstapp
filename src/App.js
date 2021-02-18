import { useState } from 'react';
import './App.css';
import Card from './Card';
import { AvatarGenerator } from 'random-avatar-generator';
import {ThemeProvider} from 'styled-components'
import Button from './element/Button'

const theme = {
  primary : '#4CAF50',
  mango: 'yellow'
}


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

  const changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = cards.findIndex(card => card.id === id);

    //2. make a copy of the cards
    const cards_copy = [...cards]
    //3. change the name of the spesifics
    cards_copy[cardIndex].name = event.target.value
    //4. set the cards with the latest version of card copy
    setCards(cards_copy)//
  }

  /* const buttonStyle = {
    backgroundColor : null
  } */

  const classes = ['button']


  if (cards.length < 3) classes.push('pink');
  if (cards.length < 2) classes.push('red text');

  console.log(classes);

  const cardsMarkup = showCard && (cards.map((card, index) => <Card
    avatar={card.avatar}
    name={card.name}
    title={card.title}
    key={card.id}
    onDelete={() => { deleteCardHandler(index) }}
    onChangeName={(event) => changeNameHandler(event, card.id)}
  />)
  );

  return (
    <ThemeProvider theme={theme} >
      <div className="App">
      <Button color="mango" length={cards.length} >Toggle</Button>
      <button className={classes.join(' ')} onClick={toggleShowCard} >Toggle show/hide</button>
      {cardsMarkup}
    </div>
    </ThemeProvider>
  );
}

export default App;
