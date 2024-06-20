import React from 'react'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage'
import MainLayout from './Layouts/MainLayout'
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import JobDetail, { JobLoader } from './Pages/JobDetail';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';
import { toast } from 'react-toastify';

const addjob =async(newjob)=>{
  const res = await fetch('/api/jobs',{
    method:'POST',
    headers :{
      'content-type':'application/json',
    },
    body: JSON.stringify(newjob)

  })
  return;
}
const deleteJob =async(id)=>{
  const res = await fetch(`/api/jobs/${id}`,{
    method:'DELETE',
  })
  return;
}
const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
  return;
};

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/jobs' element={<JobsPage/>}/>
    <Route path="/add-jobs" element={<AddJobPage addJobSubmit={addjob}/>}/>
    <Route path="/edit-jobs/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={JobLoader}/>

    <Route path='/jobs/:id' element={<JobDetail deleteJob={deleteJob}/>}loader={JobLoader}/>
    </Route>

  ))
  return (
    <>
  <RouterProvider router={router}/>
    
   </>
  )
}

export default App