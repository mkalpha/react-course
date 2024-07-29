// import NavBar from './components/Nav';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
    return (
        <>
        <Hero title="Become a React Developer" subTitle="Find a React job that suits your skill set" />
        <HomeCards />
        <JobListings isHome={true} />
        <ViewAllJobs />
        </>
    )
}

export default HomePage