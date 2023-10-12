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
const Species = ({ setSpecies, setPageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poobybutthole",
    "Mythological",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
    "Unknown",
  ];
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Species</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {species.map((item, index) => (
              <FormControlLabel
                onClick={() => {
                  setPageNumber(1);
                  setSpecies(item);
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

export default Species;
