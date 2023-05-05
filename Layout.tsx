import { AppBar, Box, Grid, Paper, Toolbar, Typography, Button} from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useTheme } from '@mui/material/styles';
import Steeper from './Steeper';
import StepForm from './StepForm';

const handleStep = (pro) => {
  console.log(pro)
}

class App extends React.Component{
  render(){
  return (
    <div>
      <header>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              DeliverEat!
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
      <Toolbar>
        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          ¡Pedí lo que sea!
        </Typography>
      </Toolbar>  
      </div>
      <div>
      <Box component={"form"}>
        <div>
        <textarea
          aria-invalid="false"
          id="outlined-multiline-static"
          placeholder="Ingrese una descripción de lo que quiera pedir."
          rows={4}
          defaultValue=""
        />
        </div>
        <div>
          <Button variant="contained" component="label">
            Adjuntar imagen
          <input hidden accept="image/.jpg" id="file" multiple type="file"
          aria-label="algo"/>
          </Button>
        </div>
      </Box>
      </div>
      </header>
      <main>
        <StepForm/>
      </main>
    <footer>
      <Grid2 className="fixed">
        <Steeper setstep={handleStep}/>
      </Grid2>
    </footer>
    </div>);
  }
}
export default App;