import styled from 'styled-components'
import { Input } from '../styles'

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
