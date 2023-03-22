import styled from 'styled-components';

const setBtnColor = ({children}) => {
    switch (children) {
        case 'Good':
            return 'green';
        case 'Neutral':
            return 'blue';
        case 'Bad':
            return 'red'
        default:
            return 'grey'
    }
}

export const Button = styled.button`
  background-color: ${setBtnColor};
  color: white;
  font-size: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: space-between;
`;