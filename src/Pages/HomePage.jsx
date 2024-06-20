import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListingsFull'
import Hero from '../components/Hero'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage =()=>{
    return (
        <>
                <Hero/>
                <HomeCards/>
                <JobListings isHome={true}/>
                <ViewAllJobs/>
        </>
    )
}

export default HomePage;