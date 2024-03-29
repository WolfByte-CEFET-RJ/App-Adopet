import styled from 'styled-components/native';

export const Pet = styled.TouchableOpacity`
  width: ${props => props.little ? '110px' : '165px'};
  height: ${props => props.little ? '110px' : '220px'};

  align-items: center;
  justify-content: center;
`;

export const PetImage = styled.Image`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;

export const PetName = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;

  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const AdoptedView = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;

  align-items: center;
  justify-content: center;

  background: #2B2B2B99;
  z-index: 10;

  border-radius: 10px;

  opacity: ${props => props.opacity ? '1' : '0'};
`

export const AdoptedImage = styled.Image`
  width: 66px;
  height: 49px;

  margin-bottom: 5px;
`

export const AdoptedText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`