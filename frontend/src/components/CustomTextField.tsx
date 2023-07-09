import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)`
& .MuiInputBase-input {
    color: white; 
    font-size:18px;
  }
  & .MuiInput-underline:before {
    border-bottom-color: #499ce3; 
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: #499ce3; 
  }

  & .MuiFormLabel-root {
    color: #A9A9AC; 
  }
`;

export default CustomTextField;
