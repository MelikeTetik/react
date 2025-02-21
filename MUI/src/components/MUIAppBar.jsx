import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';

const MUIAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget); // HATA DÜZELTİLDİ
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">MUI</Typography>

                    <Stack direction="row" sx={{ marginLeft: 'auto' }}>
                        <Button sx={{ color: '#fff' }}>Anasayfa</Button>
                        <Button sx={{ color: '#fff' }}>Hakkımızda</Button>
                        <Button sx={{ color: '#fff' }} onClick={openMenu}>Ürünler</Button>
                        <Button sx={{ color: '#fff' }}>İletişim</Button>
                    </Stack>

                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
                        <MenuItem onClick={closeMenu}>Lastik</MenuItem>
                        <MenuItem onClick={closeMenu}>Bijon</MenuItem>
                        <MenuItem onClick={closeMenu}>Kit</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MUIAppBar;
