import { SearchInput } from './SearchBar.styles.js'

export default function SearchBar({ value, onChange }) {
  return (
    <SearchInput
      type="text"
      placeholder="Analisar base de dados... (Buscar por nome, e-mail ou telefone)"
      value={value}
      onChange={onChange}
    />
  )
}
