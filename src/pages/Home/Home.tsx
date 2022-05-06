import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Pagination from './Pagination';
import usePeople from '../../state/PeopleContext';

function Home() {

    const {  isLoading, currentPeople } = usePeople();
    console.log(currentPeople);

    const renderHTML = ()=>{
      if(isLoading) return <Loader />
      
      return (
        <div className="people-grid">
          {
            currentPeople.map(p => (
              <Link key={p.name} to={`/details/${p.name}`}>{p.name}</Link>
            ))
          }
          <Pagination />
          </div>
      )
    }
    
  return (
    <div className='container'>
        <h1>Star Wars</h1>
        {
          renderHTML()
        }
    </div>
  )
}

export default Home