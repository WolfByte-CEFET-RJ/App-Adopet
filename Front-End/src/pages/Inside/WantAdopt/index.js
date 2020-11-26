import React, { useEffect, useState } from 'react';

import { Feather } from '@expo/vector-icons';
import ListBG from '../../../assets/images/WantAdopt/ListBG.png'

import { useNavigation } from '@react-navigation/native';

import PetCard from '../../../components/PetCard';

import Dog from '../../../assets/images/UserProfile/dog.png';
import Cat from '../../../assets/images/UserProfile/Gato.png';
import Bird from '../../../assets/images/WantAdopt/Bird.png';
import Duck from '../../../assets/images/WantAdopt/Pato.png';

import {
  Background,
  Body,
  Container,
  Header,
  PetArea,
  SearchArea,
  SearchName,
  Title
} from './styles';

export default function WantAdopt() {

  const [pets, setPets] = useState([]);
  const [name, setName] = useState('');

  const [visiblePets, setVisiblePets] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    if (!name) {
      setVisiblePets(pets);
      return;
    };

    const findName = pets.filter((item) => item.name.indexOf(name) != -1);
    setVisiblePets(findName)

  }, [name])

  useEffect(() => {
    const names = [
      {name:'Polenta',          image: Dog,  adopted: 0},
      {name:'Duck Tales',       image: Duck, adopted: 0},
      {name:'Garfield',         image: Cat,  adopted: 1},
      {name:'Polenta',          image: Dog,  adopted: 0},
      {name:'Duck Tales',       image: Duck, adopted: 1},
      {name:'Garfield',         image: Cat,  adopted: 0},
      {name:'Festa em Ipanema', image: Bird, adopted: 0},
      {name:'Polenta',          image: Dog,  adopted: 1},
      {name:'Duck Tales',       image: Duck, adopted: 0},
      {name:'Garfield',         image: Cat,  adopted: 0},
      {name:'Festa em Ipanema', image: Bird, adopted: 0},
      {name:'Polenta',          image: Dog,  adopted: 1},
      {name:'Duck Tales',       image: Duck, adopted: 0},
      {name:'Garfield',         image: Cat,  adopted: 0},
      {name:'Festa em Ipanema', image: Bird, adopted: 0},
    ]

    setVisiblePets(names);
    setPets(names);
  }, [])

  return(
    <Background source={ListBG}>
      <Container>
        <Header>
          <Title>Animais para doação</Title>

          <SearchArea>
            <SearchName
              placeholder={"Pesquise seu pet"}
              onChangeText={name => setName(name)}
              maxLength={20}
            />
            <Feather name="search" size={25} color={'#12947F'}/>
          </SearchArea>
        </Header>

        <Body
          data={visiblePets}
          keyExtractor={( _, index) => String(index)}
          numColumns={2}
          renderItem={ ({item, index}) => (
            <PetArea index={index}>
              <PetCard
                image={item.image}
                name={item.name}
                adopted={item.adopted}
              />
            </PetArea>
          )}
        />
      </Container>
    </Background>
  )

}