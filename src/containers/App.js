import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../styles/App.css'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LookBook from '../components/LookBook'
import Nav from '../components/Nav'
import Products from '../components/Products'
import Services from '../components/Services'
import Staff from '../components/Staff'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/lookbook' exact component={LookBook} />
        <Route path='/products' exact component={Products} />
        <Route path='/our-staff' exact component={Staff} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </Router>
  )
}

export default App
