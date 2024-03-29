import React from 'react';

import BG from '../../../assets/images/Home/BG.png';

import { useNavigation } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Button from '../../../components/Button';
import Header from '../../../components/Header';

import {
  Background,
  Container,
  TextInicial,
  Buttons,
} from './styles';

export default function Home() {

  const navigation = useNavigation();

  function goTo(screen) {
    navigation.navigate(screen);
  }

  return (
    <Background source={BG}>
      <StatusBar backgroundColor={'#ffffffef'}/>
      <Container>

        <TextInicial>
          <Header
            title={'Bem-Vindo ao'}
            strong={'Adopet'}
            description={'O aplicativo feito para facilitar\na sua busca por um animal para adotar\nou uma pessoa para adotar seu animal.\n\nAproveite!'}
          />
        </TextInicial>

        <Buttons>

          <Button
            onPress={() => {goTo('Register')}}
            text='Cadastro'
            colors={['#F17808','#FF8A00']}
            radius={10}
          />

          <Button
            onPress={() => {goTo('Login')}}
            text='Login'
            colors={['#12947F','#0AB599']}
            radius={10}
          />

        </Buttons>

      </Container>

    </Background>
  );
}