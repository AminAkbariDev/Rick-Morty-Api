import React from "react";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
const Gender = ({ setPageNumber, setGender }) => {
  let genders = ["Male", "Female", "Genderless", "Unknown"];
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Gender</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {genders.map((item, index) => (
              <FormControlLabel
                onClick={() => {
                  setPageNumber(1);
                  setGender(item);
                }}
                key={index}
                value={item}
                control={<Radio />}
                label={item}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default Gender;
