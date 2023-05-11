/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import JobDetails from './components/JobDetails/JobDetails';
import NotFound from './components/NotFound/NotFound';
import AppliedJobs2 from './components/AppliedJobs2/AppliedJobs2';
import AppliedJobs3 from './components/AppliedJobs3/AppliedJobs3';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://pesha1.free.beeceptor.com/jobs')
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`https://pesha1.free.beeceptor.com/job/${params.jobId}`)
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied",
        element: <AppliedJobs3></AppliedJobs3>
      },
      // {
      //   path: "applied",
      //   element: <h3>Added job after clicking <button className='btn-common'>Apply Now</button> button is below <span style={{ color: 'tomato' }}>"/job/jobId"</span> route. <small>i couldn't add those here :(</small></h3>
      // },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
