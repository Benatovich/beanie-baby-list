import { useEffect, useState } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 19;
  const [filteredBabies, setFilteredBabies] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const beanies = await getBeanieBabies(from, to);

      setBeanieBabies(beanies);
    }

    fetch();
  }, [page]); // what can you do with this array to trigger a fetch every time the page changes?

  function filterBeanieBabies(filter) {
    const fewerBabies = beanieBabies.filter(beanieBaby => beanieBaby.title.includes(filter));

    filter ? setFilteredBabies(fewerBabies) : setFilteredBabies(beanieBabies);
  }

  return (
    <>
      {/* <h2>Search</h2>

      <input placeholder='type here' onChange={(e) => setSearchQuery(e.target.value)}/> */}
      <div className='filter'>
        Filter Beanie Babies: <br></br>
        <input onChange={(e) => filterBeanieBabies(e.target.value)} />
      </div>

      <h2>Current Page: {page}</h2>
      <div className='buttons'>
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        {/* on click, this button should increment the page in state  */}
        <button
          onClick={() => setPage(page + 1)}
          disabled={beanieBabies.length < perPage} >Next Page</button>
      </div>
      {/* pass the beanie babies into the BeaniesList component */}
      <BeaniesList beanieBabies={filteredBabies.length ? filteredBabies : beanieBabies}/>
    </>
  );
}

export default App;
