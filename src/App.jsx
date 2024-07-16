import React from 'react'
import UseState from './components/UseState'
import UseEffect from './components/UseEffect'
import UseRef from './components/UseRef'
import UseMemo from './components/UseMemo'
import UseCallBack from './components/UseCallBack'
import UseContext from './components/UseContext'
import Profile from './components/Profile'
import Footer from './components/Footer'
import UseReducer from './components/UseReducer'

const App = () => {

  return (
    <div className='user'>
      <Profile />
      <div className='table'>
        <div>
          <h3>useState Hook</h3>
          <UseState />
        </div>
        <div>
          <h3>useEffect Hook</h3>
          <UseEffect />
        </div>
        <div>
          <h3>useRef Hook</h3>
          <UseRef />
        </div>
        <div>
          <h3>useMemo Hook</h3>
          <UseMemo />
        </div>
        <div>
          <h3>UseCallBack Hook</h3>
          <UseCallBack />
        </div>
        <div>
          <h3>UseContext Hook</h3>
          <UseContext />
        </div>
        <div>
          <h3>UseReducer Hook</h3>
          <UseReducer />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
