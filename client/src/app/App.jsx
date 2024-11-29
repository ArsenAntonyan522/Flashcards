
// import MainPage from '../pages/MainPage/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ManPage from '../pages/ManPage/ManPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ManPage />,
      // children: [
      //   { path: '/man', element: <ManTopics /> },
      // ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;