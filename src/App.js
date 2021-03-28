import './App.css';
import { Container, Typography } from '@material-ui/core';
import Order from './components/Order/index.js'

function App() {
  return (
    <Container maxWidth="md">
      <Typography
        gutterBottom
        variant="h1"
        align="center">
        Restaurant App
        </Typography>
        <Order>

        </Order>
    </Container>
  );
}

export default App;
