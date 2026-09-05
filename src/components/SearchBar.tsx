import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cargo ou empresa"
      />

      <input
        type="text"
        placeholder="Localização"
      />

      <button>Buscar vagas</button>
    </div>
  )
}

export default SearchBar