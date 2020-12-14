import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
`;

export const Title = styled.Image`
`;

export const HeaderTitle = styled.View`
  flex-direction: row;
`;

export const Message = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const BottomDonate = styled.TouchableOpacity`
  background-color:#C4D0CF;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80px;
  margin: 5px 0px;
`;

export const BottomAdopt = styled(BottomDonate)`
  background-color:#E4EEED;
`;

export const Adopt = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ListView = styled.View`
  flex-direction: row;
  margin: 0px 5px;
  align-items: center;
`;

export const Donate = styled(Adopt)`
`;

export const PetArea = styled.View`
`;

export const Body = styled.FlatList`
`;
