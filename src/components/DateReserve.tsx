'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select,MenuItem } from "@mui/material"

import TextField from '@mui/material/TextField';

export default function DateReserve(){
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit 
        px-10 py-5 flex flex-row justify-center">
            <TextField name="Name-Lastname" label="Name-Lastname" variant="standard" />
            <TextField name="Contact-Number" label="Contact-Number" variant="standard" />
            <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[200px]">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"/>
            </LocalizationProvider>
        </div>
    )
}