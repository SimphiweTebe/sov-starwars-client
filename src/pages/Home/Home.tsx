import Loader from '../../components/Loader/Loader';
import Pagination from './Pagination';
import usePeopleData from '../../state/PeopleContext';
import Hero from './Hero';
import Grid from '../../components/Grid/Grid';
import Card from '../../components/Grid/Card';

function Home() {

    const { state: { isLoading, currentPeople } } = usePeopleData();

    const renderHTML = ()=>{
      if(isLoading) return <Loader />
      
      return (
        <>
          <Hero />
          <Grid>
            {
              currentPeople.map(character => <Card character={character} key={character.name} />)
            }
          <Pagination />
          </Grid>
        </>
      )
    }    
    
  return (
    <div className='container'>
        {
          renderHTML()
        }
    </div>
  )
}

export default Home