import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #020A17;
    color: #FFFFFF;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-image:
      linear-gradient(rgba(0, 230, 248, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 230, 248, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

export const Title = styled.h1`
  color: #00e6f8;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(0, 230, 248, 0.5);
  border-bottom: 2px solid #00e6f8;
  padding-bottom: 10px;
  display: inline-block;
`

export const FormContainer = styled.form`
  background: rgba(14, 53, 102, 0.5);
  padding: 1.5rem;
  border-left: 4px solid #00e6f8;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Input = styled.input`
  background: rgba(2, 10, 23, 0.8);
  border: 1px solid #005a70;
  color: #fff;
  padding: 0.8rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #00e6f8;
    box-shadow: 0 0 8px rgba(0, 230, 248, 0.3);
  }
`

// NOVO: Estilo para a barra de busca
export const SearchInput = styled(Input)`
  width: 100%;
  margin-bottom: 2rem;
  border-color: #00e6f8;
  border-width: 2px;
  background: rgba(14, 53, 102, 0.3);
  font-size: 1.1rem;

  &::placeholder {
    color: #005a70;
    font-style: italic;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

export const EvokerButton = styled.button`
  background-color: ${(props) => (props.danger ? 'transparent' : '#00E6F8')};
  color: ${(props) => (props.danger ? '#FF3366' : '#020A17')};
  border: 2px solid ${(props) => (props.danger ? '#FF3366' : '#00E6F8')};
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => (props.danger ? '#FF3366' : 'transparent')};
    color: ${(props) => (props.danger ? '#FFF' : '#00E6F8')};
    box-shadow: 0 0 10px ${(props) => (props.danger ? '#FF3366' : '#00E6F8')};
  }
`

export const Card = styled.div`
  background: linear-gradient(
    135deg,
    rgba(14, 53, 102, 0.8) 0%,
    rgba(3, 20, 43, 0.9) 100%
  );
  border: 1px solid #005a70;
  padding: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${(props) => (props.isEditing ? '#FFCC00' : '#00E6F8')};
  }

  &:hover {
    border-color: ${(props) => (props.isEditing ? '#FFCC00' : '#00E6F8')};
    transform: translateX(5px);
    transition: all 0.3s ease;
  }
`

export const ContactInfo = styled.div`
  margin-bottom: 1rem;
  p {
    margin: 0.4rem 0;
    font-size: 1.1rem;
  }
  strong {
    color: #00e6f8;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }
`

export const CardInput = styled(Input)`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-color: #ffcc00; /* Amarelo para destacar que está em edição */

  &:focus {
    border-color: #ffcc00;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.3);
  }
`
