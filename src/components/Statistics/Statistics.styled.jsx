import styled from 'styled-components';
 
const setItemTextColor = ({children}) => {
    const itemText = children[0].split(':')
    console.log(itemText[0])
  switch (itemText[0].trim()) {
    case 'Good':
      return 'green';
    case 'Neutral':
      return 'blue';
    case 'Bad':
      return 'red';
    default:
      return 'grey';
  }
};

export const StatItem = styled.li`
  color: ${setItemTextColor};
  font-size: 20px;
  font-weight: 700;
`;

export const StatTextTotal = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

export const StatTextPercent = styled.p`
  color: gold;
  font-size: 24px;
`;