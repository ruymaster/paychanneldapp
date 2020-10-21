import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography varient="title" color="inherit">
                        DApp test for Payment Channel with react
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;