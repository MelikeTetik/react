import React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';

const MUITextField = () => {
    return (
        <div>
            <div>
                <TextField id="outlined-basic" label="isim" variant="outlined" />
                <TextField id="filled-basic" label="isim" variant="filled" />
                <TextField id="standard-basic" label="isim" variant="standard" />
            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField label="isim" variant='outlined' color="warning"></TextField>

            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField disabled label="isim" variant='outlined' color="warning" placeholder="İsminizi Giriniz"></TextField>

            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField disabled label="isminizi giriniz" variant='outlined' InputProps={{ startAdornment: <InputAdornment position='start'><PersonIcon></PersonIcon></InputAdornment> }}></TextField>

            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField disabled label="isminizi giriniz" variant='outlined' InputProps={{ endAdornment: <InputAdornment position='end'><PersonIcon></PersonIcon></InputAdornment> }}></TextField>

            </div>
            <div style={{ marginBottom: '30px' }}>
                <TextField disabled label="isminizi giriniz" variant='outlined' size='small'></TextField>
                <TextField disabled label="isminizi giriniz" variant='outlined' size='medium'></TextField>

            </div>
        </div>

    )
}

export default MUITextField

