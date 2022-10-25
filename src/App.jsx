import React from 'react';
import { StyledAppWrapper, StyledButtons } from 'src/App.styled';
import Button from 'src/ui/Button';

function App() {
  return (
    <StyledAppWrapper>
      <StyledButtons>
        <Button>Стандартная кнопка</Button>
        <Button variant="outlined">Кнопка с рамкой</Button>
      </StyledButtons>
    </StyledAppWrapper>
  );
}

export default App;
