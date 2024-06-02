import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Comp from './constants/Comp'
import './style/App.scss'
import General from './context/General'
import { ConfigProvider } from 'antd'

function App() {
  const root = createBrowserRouter([
    {
      path: '', element: <Comp.MainLayout />, children: [
        { index: true, element: <Comp.Home /> },

        {
          path: '*', element: <h1>Error</h1>
        }
      ],
    },
    {
      path: '/login', element: <Comp.Auth />, children: [
        { index: true, element: <Comp.Login /> },
      ]
    },
  ])
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: '#F1592A',
              algorithm: true, // Enable algorithm
            },
            Input: {
              colorPrimary: '#F1592A',
              algorithm: true, // Enable algorithm

            },
            Tabs: {
              colorPrimary: '#F1592A',
              algorithm: true, // Enable algorithm
            },
            Checkbox: {
              colorPrimary: '#27BDB0',
              algorithm: true, // Enable algorithm

            }
          },
        }}
      >
        <General>
          <RouterProvider router={root} />
        </General>
      </ConfigProvider>
    </>
  )
}

export default App
