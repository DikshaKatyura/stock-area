import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage';
import EditDetailsPage from './pages/EditDetailsPage';
import store from './store/index.js';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {path : ':id' ,children:[
        {index:true,element:<WarehouseDetailsPage/>},
        {path : 'edit',element : <EditDetailsPage/>}
      ]}
    ],
  },
]);
 
function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={routes}>
      <Home></Home>
    </RouterProvider>
    </Provider>
  );
}

export default App;
