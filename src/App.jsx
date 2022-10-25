import React, { useState } from 'react';
import { StyledAppWrapper, StyledButtons } from 'src/App.styled';
import Button from 'src/ui/Button/Button';
import Modal from 'src/ui/Modal/Modal';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <StyledAppWrapper>
      <StyledButtons>
        <Button onClick={openModal}>Открыть модальное окно</Button>
        <Button variant="outlined">Кнопка с рамкой</Button>
      </StyledButtons>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Добавление пользователя">
        <div>тут будет форма добавления пользователя</div>
      </Modal>
    </StyledAppWrapper>
  );
}

export default App;
