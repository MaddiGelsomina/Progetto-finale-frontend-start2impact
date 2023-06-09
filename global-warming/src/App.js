import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home.js';
import GraphPage from './pages/graphPage/GraphPage';
import Error from "./pages/errorPage/Error.js";
import {getData} from './api/api';

const router = createBrowserRouter(createRoutesFromElements( 
  <Route>
    <Route path='/' element={<Home />}/>
    <Route path='/*' element={<GraphPage />} loader={({params}) => {
      let param = Object.values(params)[0];
      return getData(param);
    }}/>
    <Route path="*" element={<Error />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;