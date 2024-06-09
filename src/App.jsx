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
  const theme = {
    token: {
      colorPrimary: '#f56a00',
      // colorPrimaryBg:'#f56a00', 
      // colorPrimaryBorder:'#f56a00', 
      // colorPrimaryBgHover:'#f56a00', 
      // colorPrimaryBorderHover:'#f56a00', 
      // colorPrimaryActive:'#f56a00', 
      // colorPrimaryHover:'#f56a00', 
      // colorPrimaryTextHover:'#f56a00', 
      // colorPrimaryText:'#f56a00', 
      // colorPrimaryTextActive:'#f56a00',
      colorActiveText:'red' 

    },
    components: {
      Button: { colorPrimary: '#f56a00' },
      Input: { colorPrimary: '#f56a00' },
      Tabs: { colorPrimary: '#f56a00' },
      Checkbox: { colorPrimary: '#f56a00' },
      SideBar: { colorPrimary: '#f56a00' },
      
    },
  };

  return (
    <>
      <ConfigProvider theme={theme} >
        <General>
          <RouterProvider router={root} />
        </General>
      </ConfigProvider>
    </>
  )
}

export default App
