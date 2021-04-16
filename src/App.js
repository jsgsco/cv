import DataNavProvider from './context/DataNavProvider'
import DataUserProvider from './context/DataUserProvider'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import { Container } from 'react-bootstrap'

import routes from './routes/routes'

function App() {
  return (
    <DataUserProvider>
      <DataNavProvider>
        <Router>
          <Switch>
            <Container>
              {
                routes.map((route, index) => (
                  <WithRoute 
                    key={index}
                    {...route}
                  />
                ))
              }
            </Container>
          </Switch>
        </Router>
      </DataNavProvider>
    </DataUserProvider>
  );
}

function WithRoute(route) {
  console.log(route)
  return (
    <Route 
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  )
}

export default App;
