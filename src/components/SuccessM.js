import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react'


function SuccessM() {
    return (
        <React.Fragment>
             <CssBaseline/>
              <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" align='center' >DHS Reunion Survey</Typography>
            </Toolbar>
          </AppBar>
          <Typography variant='h4' component='h3' color='primary' gutterBottom align='center' >Your Data was successfully submitted</Typography>
          <Typography variant='h6' component='h6' color='textSecondary' align='center'>We will contact you soon</Typography>
        </React.Fragment>
    )
}

export default SuccessM
