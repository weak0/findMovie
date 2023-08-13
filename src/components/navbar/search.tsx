import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';


const Search = () => {
  const navigate = useNavigate(); 
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>  ) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch('');
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input className={styles.search}  placeholder='Search...' onChange={(e) => setSearch(e.target.value)}></input>
    </form>
  
  )
}

export default Search;