import DataNavProvider from './context/DataNavProvider'
import DataHomeProvider from './context/DataHomeProvider'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import { Container } from 'react-bootstrap'
import routes from './routes/routes'


function App() {
  return (
    <DataHomeProvider>
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
    </DataHomeProvider>
  );
}


export default App;
