import NavBar from './components/Nav';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs';


const App = () => {
  return (
    <>
        <NavBar />
        <Hero title='Test Title' subTitle='This is the Substitle' />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
    </>
  )
};

export default App