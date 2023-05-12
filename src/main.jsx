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
import AppliedJobs3 from './components/AppliedJobs3/AppliedJobs3';
import cartJobsLoader from './loaders/cartJobsLoader';
import ReviewJob from './components/ReviewJob/ReviewJob';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://pesha6.free.beeceptor.com/jobs')
      },
      {
        path: "job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`https://pesha6.free.beeceptor.com/job/${params.jobId}`)
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied",
        element: <AppliedJobs3></AppliedJobs3>
        // element: <ReviewJob></ReviewJob>
        // element: <AppliedJobs></AppliedJobs>
      },
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
