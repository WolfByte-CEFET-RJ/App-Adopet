import styled from 'styled-components';
import Constants from 'expo-constants';

export const Background = styled.ImageBackground`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;

  margin-top: ${Constants.statusBarHeight}px;
`

export const Version = styled.Text`
  position: absolute;
  right: 20px;
  top: 20px;

  color: white;
`

export const Body = styled.View`
  flex: 1;
`

export const Options = styled.View`
  flex: 1;
  margin: 40px 20px;
`

export const Option = styled.TouchableOpacity`
  width: auto;

  flex-direction: row;
  align-items: center;

  margin-bottom: 35px;
`

export const Line = styled.View`
  position: relative;
  right: 20px;

  height: 40px;
  width: 5px;

  background: #FB9A21;
`

export const OptionText = styled.Text`
  font-size: 20px;
  color: white;
`

export const ExitArea = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  bottom: 20px;

  flex-direction: row;
`

export const ExitText = styled.Text`
  font-size: 16px;
  color: white;

  margin-left: 5px;
`