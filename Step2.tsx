import { AppBar, Box, Grid, Paper, Toolbar, Typography, Button} from '@mui/material';
import TextField from '@mui/material/TextField/TextField';
import * as React from 'react';
import {ComboBoxComponent} from '@syncfusion/ej2-react-dropdowns';
import {employees} from './components/Form/Form';

class Step2 extends React.Component{
  const divStyle = {
    margin: 100,
    width: 250
  }

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
          ¿Dónde quiere que lo busquemos?
        </Typography>
      </Toolbar>  
      </div>
      <div>
      <Box component={"form"}>
        <div>
        <textarea
          aria-invalid="false"
          id="outlined-multiline-static"
          placeholder="Dirección"
          rows={2}
          defaultValue=""
        />
        <ComboBoxComponent>
          dataSource={employees}
          placeholder="Ciudad"
          fields={{
            text:"Name",
            vale:"1"
          }}
          </ComboBoxComponent>
        </div>
      </Box>
      </div>
      </header>
    </div>);
  }
}
export default Step2;