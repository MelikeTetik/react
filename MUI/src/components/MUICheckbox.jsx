import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

const MUICheckbox = () => {
    const [isConfirm, setConfirm] = useState(false);
    const sumbit = () => {
        if (!isConfirm) {
            alert("Sözleşmeyi onaylayınız!")
        } else {
            alert("Başarıyla Gönderildi.")
        }
    }
    return (
        <div>
            {/* <FormControl component="fieldset">
                <FormLabel component="legend"> Eğitim Durumu</FormLabel>
                <FormGroup >
                    <FormControlLabel
                        value="bottom"
                        control={<Checkbox />}
                        label="İlkokul"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Checkbox defaultChecked />}
                        label="Lise"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Checkbox />}
                        label="Üniversite"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl> */}







            <FormControl component="fieldset">

                <FormGroup >
                    <FormControlLabel

                        control={<Checkbox checked={isConfirm} onChange={(e) => setConfirm(e.target.checked)} />}
                        label="Kullanım Koşullarını Kabul Ediyorum."
                        labelPlacement="end"
                    />
                    <Button onClick={sumbit} variant='contained'>Formu Gönder</Button>
                </FormGroup>
            </FormControl>

        </div>
    )
}

export default MUICheckbox
