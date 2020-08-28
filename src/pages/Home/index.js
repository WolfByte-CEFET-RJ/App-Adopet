import React,{useState} from 'react';

import PatasTransparentes from '../../assets/images/PatasTransparentes.png';
import GatoHome from '../../assets/images/GatoHome.png';

import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import { useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';

import {
  Background,
  ImagePatas,
  ImageGato,
  Header,
  AdopetTitle,
  Description,
  Button1,
  Button2,

} from './styles';

const fetchFonts = () => {
    return Font.loadAsync({
      'GilroyLight': require('../../assets/fonts/Gilroy-Light.ttf'),
      'GilroyBold':require('../../assets/fonts/Gilroy-Bold.ttf'),
    });
  };


export default function Inicial() {
      const [dataLoaded, setDataLoaded] = useState(false);
      if (!dataLoaded){
      return(
         <AppLoading
            startAsync = {fetchFonts}
            onFinish = {()=> setDataLoaded(true)}
          />
       );
      }
      const navigation= useNavigation();
      function IrparaLogin(){
        navigation.navigate('Login');
      }
      function IrparaInicial(){
        navigation.navigate('Inicial')
      }

  return (
    <Background>

      <ImagePatas source={PatasTransparentes}/>
      <ImageGato source={GatoHome}/>

      <Header style={{fontFamily:'GilroyLight'}}>Bem-Vindo ao</Header>
      <AdopetTitle style={{fontFamily:'GilroyBold'}}>Adopet</AdopetTitle>

      <Description>O aplicativo feito para facilitar{"\n"}a sua busca por um animal para adotar{"\n"}ou uma pessoa para adotar seu animal.{"\n"}{"\n"}Aproveite!</Description>


      <Button1>
        <Button
        onPress={() => {IrparaInicial()}}
        text='Cadastro'
        colors={['#F17808','#FF8A00']}
        />
      </Button1>

      <Button2>
        <Button
        onPress={() => {IrparaLogin()}}
        text='Login'
        colors={['#12947F','#0AB599']}
      />
      </Button2>

    </Background>
  );
}