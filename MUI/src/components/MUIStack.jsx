import React from 'react'
import { Divider, Stack } from '@mui/material'

const MUIStack = () => {
    return (
        <div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={5} divider={<Divider orientation='horizontal' />}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>

        </div>
    )
}

export default MUIStack
