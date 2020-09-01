import styled from 'styled-components/native';

export const TextButton = styled.Text`
    color: ${(props => props.theme.colors.textButton)};
    font-size: 21px;
    font-family: 'RalewayRegular';
`;

export const Touchable = styled.TouchableOpacity`
    width: 150px;
    height: 65px;
    margin: 0px 12px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 4px 0px 25px ${(props => props.theme.colors.borderBox)};
    background: ${(props => props.theme.colors.backgroundButton)};
`;