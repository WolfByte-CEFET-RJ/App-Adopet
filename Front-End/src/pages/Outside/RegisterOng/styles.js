import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const BackGround = styled.ImageBackground`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

export const Back= styled.View`
  position: absolute;
  top: 35px;
  left: 10px;
  z-index: 10;
`;

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + 30}px;
  padding-left: 12px;
  padding-right: 12px;
`

export const Header = styled.View`
  margin-left: 16px;
`

export const HeaderTitle = styled.Text`
  font-size: 24px;
  color: #1B262C;
  margin-bottom: 10px;
`

export const Strong = styled.Text`
  font-weight: bold;
`

export const Person = styled.View`
  flex-direction: row;
`

export const Forms = styled.View`
  justify-content: center;
  align-items: center;
`

export const PickerView = styled.View`
  background: white;
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: 40px;

  border-radius: 5px;

  padding-left: 5px;

  margin-top: 10px;
  margin-bottom: 10px;

  elevation: 5;
`

export const PlaceImage = styled.View`
  height: 150px;

  align-items: center;
  justify-content: center;

  margin-top: 24px;
  margin-bottom: 14px;
`

export const PlaceImageOpacity = styled.TouchableOpacity`
  background: #E2E2E2;
  height: 150px;
  width: 150px;

  border-radius: 75px;

  justify-content: center;
  align-items: center;
`

export const ImageAvatar = styled.Image`
  height: 150px;
  width: 150px;

  border-radius: 75px;
`

export const CheckBoxes = styled.View`
  justify-content: space-between;
`

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CheckBoxText = styled.View`
  flex-direction: row;
`

export const TextColor = styled.Text`
  color: ${props => props.color};
  font-weight: bold;
`

export const Footer = styled.View`
  height: 110px;

  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  padding-bottom: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`