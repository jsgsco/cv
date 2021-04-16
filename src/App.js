import DataNavProvider from './context/DataNavProvider'
import DataUserProvider from './context/DataUserProvider'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Container } from 'react-bootstrap'

import PublicRoutes from './routes/public.routes'
import PrivateRoutes from './routes/private.routes'

function App() {
  return (
    <DataUserProvider>
      <DataNavProvider>
        <Router>
          <Container>
            
          </Container>
        </Router>
      </DataNavProvider>
    </DataUserProvider>
  );
}

export default App;
