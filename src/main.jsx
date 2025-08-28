import { StrictMode } from 'react'
import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Layout from './components/Layout.jsx';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Layout>
    <App />

    </Layout>
  </React.StrictMode>
);