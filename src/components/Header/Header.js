import { TextField, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';
import React from 'react';
import './Header.css';
import categories from '../../data/categories';

const Header = () => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            type: 'dark',
        },
    });

    return (
        <div className='header'>
            <span className='title'>
                WORD HUNT
            </span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    {/* <TextField id='standard-basic' label="Standard" /> */}
                    <TextField
                        id='standard-select-currency'
                        select
                        label="Select"
                        helperText="Please select your currency"
                    >
                        {
                            categories.map((category) => (
                                <MenuItem >
                                    {category.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;