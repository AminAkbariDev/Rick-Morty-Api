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

const Status = ({ setStatus, setPageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>Status</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {status.map((item, index) => (
              <FormControlLabel
                key={index}
                onClick={() => {
                  setPageNumber(1);
                  setStatus(item);
                }}
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

export default Status;
