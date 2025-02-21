import React from 'react';
import { Grid } from '@mui/material';

const MUIGrid = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={8} lg={9}>ITEM 1</Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>ITEM 2</Grid>
            </Grid>
        </div>
    );
};

export default MUIGrid;

