import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import JobListing from '../components/JobListing';

const PageSearch = ({Searching}) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  useEffect(() => {
   const fetchJobData =async()=>{
    setLoading(true);
    try {
      if(query){
        const res = await Searching(query)
        const data = res.json()
        setResult(data)

      }
    } catch (error) {
      console.log('error fetching jobdata :',error)
    }finally{
      setLoading(false)

    }
   }
   fetchJobData();
  }, [query,Searching]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Search Results
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <>
            {result.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {result.map((job) => (
                  <JobListing key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No jobs found</p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PageSearch;
