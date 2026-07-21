import styled from 'styled-components'
import {
  Card as BaseCard,
  ContactInfo as BaseContactInfo,
  Input
} from '../styles'

export const Card = styled(BaseCard)``

export const ContactInfo = styled(BaseContactInfo)``

export const CardInput = styled(Input)`
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-color: #ffcc00;

  &:focus {
    border-color: #ffcc00;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.3);
  }
`
