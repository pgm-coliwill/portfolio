// css files
import "./Reset.css";
import "./css/fonts.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Home, ProjectDetail } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />,
      <Route path="/project-detail" element={<ProjectDetail />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
