import React from 'react'
import { useTheme } from 'styled-components'

import { useModalAlert } from '@hooks/useModalAlert'

import { Container, Footer, ButtonCancel, ButtonConfirm, Wrapper, Header } from './styles'

export const ModalAlert: React.FC = () => {
  const { isOpenModalAlert, data, handleConfirmAlert, onCloseModalAlert } = useModalAlert()
  const theme = useTheme()

  return (
    <Container
      isOpen={isOpenModalAlert}
      onRequestClose={() => onCloseModalAlert()}
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background_overlay_modal
        }
      }}
    >
      <Wrapper>
        <Header>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
        </Header>
        <Footer>
          <ButtonCancel
            onClick={onCloseModalAlert}
          >
            {data?.buttonCancel}
          </ButtonCancel>

          <ButtonConfirm
            onClick={handleConfirmAlert}
          >
            {data?.buttonConfirm}
          </ButtonConfirm>
        </Footer>
      </Wrapper>
    </Container>
  )
}