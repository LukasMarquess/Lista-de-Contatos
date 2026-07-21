import styled from 'styled-components'
import { Input } from '../styles'

export const FormContainer = styled.form`
  background: rgba(14, 53, 102, 0.5);
  padding: 1.5rem;
  border-left: 4px solid #00e6f8;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormTitle = styled.h3`
  color: #00e6f8;
  margin-bottom: 0.5rem;
`

export const FormInput = styled(Input)`
  width: 100%;
`
