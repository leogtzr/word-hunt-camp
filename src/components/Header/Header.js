import { TextField, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';
import React from 'react';
import './Header.css';
import categories from '../../data/categories';

const Header = ({category, setCategory, word, setWord, lightMode}) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: lightMode? '#000' : '#fff',
            },
            type: lightMode? "light" : 'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    };

    return (
        <div className='header'>
            <span className='title'>
                {word? word : "Word Hunt"}
            </span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id='standard-basic' 
                        label="Word" 
                        className="search" 
                        value={word}
                        onChange={(event) => setWord(event.target.value)}    
                    />

                    <TextField
                        select
                        label="Language"
                        className="select"
                        value={category}
                        onChange={(event) => handleChange(event.target.value)}
                    >
                        {
                            categories.map((category) => (
                                <MenuItem key={category.value} value={category.label}>
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