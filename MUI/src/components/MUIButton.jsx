import React from 'react'
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const MUIButton = () => {
  return (
    <div>
        <div style={{marginBottom:'50px'}}>
            <Button variant='text'>Kaydol</Button>
            <Button variant='contained'>Kaydol</Button>
            <Button variant='outlined'>Kaydol</Button>

        </div>
        <div style={{marginBottom:'50px'}}>
            <Button color='primary'>Giriş Yap</Button>
            <Button color='error'>Giriş Yap</Button>
            <Button color='info'>Giriş Yap</Button>
            <Button color='secondary'>Giriş Yap</Button>
            <Button color='success' variant='contained'>Giriş Yap</Button>
        </div>

        <div style={{marginBottom:'50px'}}>
            <Button size='small' variant='contained' color='warning'>Geri Dön</Button>
            <Button size='medium' variant='contained' color='warning'>Geri Dön</Button>
            <Button size='large' variant='contained' color='warning'>Geri Dön</Button>

        </div>

        <div style={{marginBottom:'50px'}}>
            <Button size='small' variant='contained' color='warning' startIcon={<AddIcon/>}>Geri Dön</Button>

            <Button onClick={()=>alert("Geri Dönmedi...")} size='small' variant='contained' color='warning' endIcon={<AddIcon/>}>Geri Dön</Button>
        </div>

      
    </div>
  )
}

export default MUIButton
