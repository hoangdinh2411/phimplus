'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Item } from '~/types/app';

interface Props {
  value: string | number;
  data: Item[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

function BasicSelect({ value, data, handleChange, name }: Props) {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        {/* <InputLabel id={`${name}-label`}>{label}</InputLabel> */}
        <Select
          labelId={`${name}-label`}
          id={name}
          value={value}
          sx={{
            '&.MuiInputBase-formControl': {
              border: '0.5px solid ',
            },
          }}
          onChange={(event) => {
            handleChange(event as React.ChangeEvent<HTMLInputElement>);
          }}
          size='medium'
          name={name}
        >
          {data.map((item, index) => {
            return (
              <MenuItem value={item.slug} key={index}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default React.memo(BasicSelect);
