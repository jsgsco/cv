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
        <Container>
          <Router>
            <Switch>
              {
                routes.map((route, index) => (
                  <Route 
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                ))
              }
            </Switch>
          </Router>
        </Container>
      </DataNavProvider>
    </DataUserProvider>
  );
}


export default App;
