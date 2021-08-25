import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import "../App.css"
const useStyles = makeStyles((theme) => ({
    root: {
        width: "120px"
      },
      input: {
        padding: "10px 14px"
      },
    formControl: {
    margin: theme.spacing(2),
    minWidth: 180,
    // minHeight:100,
    borderColor:'blue',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

export default function SelectFrom({coins}) {
  const classes = useStyles();
  const [token, setToken] = React.useState('');
  const [data, setData] = React.useState(JSON.parse(localStorage.getItem('data')));
  const handleChange = (event) => {
    setToken(event.target.value);
    setData(event.target.value);
    console.log("valuehd",data)
  };

  return (
    <div>
      <FormControl variant="outlined" id="form-control" className={classes.formControl}>
        <InputLabel  id="demo-simple-select-outlined-label"><P>Select Network</P></InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={token}
          onChange={handleChange}
          label="Select Token"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {coins.map((coin, index) =>(
                  <MenuItem value={index} ><Img src={coin.image}/><P>{coin.id} Network</P></MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}

const P=styled.h4`
    font-weight: 1000;
    font-style:bold;
    color: black;
`

const Img=styled.img`
    width: 100px;
`