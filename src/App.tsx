import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage"
import NotFoundPage  from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import { Job } from './types'

const App = () => {

  const addJob = async(newJob: Partial<Job> ) => {
    console.log(newJob)
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(newJob)
    })
    console.log('res :', res);
    return;
  }

  const deleteJob = async(id: string) =>{
    console.log("delete", id)
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    console.log('res :', res);
    return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} />
        <Route path='/add-job/' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='*' element={<NotFoundPage />} />
    </Route>
  ))

  return <RouterProvider router={router} />;
};

export default App;
