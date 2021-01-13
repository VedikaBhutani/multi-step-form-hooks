import React from "react";
import {
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
const FinalStep = ({ prevStep, form }) => {
  return (
    <div>
      <Dialog fullWidth onClose={(e) => prevStep(e)} open={true}>
        <DialogTitle>Summary</DialogTitle>
        <DialogContent dividers>
          {"Name: "}
          <Typography display="inline">{form.name}</Typography>
          <br></br>
          {"Email: "}
          <Typography display="inline">{form.email}</Typography>
          <br></br>
          {"Gender: "}
          <Typography display="inline">{form.gender}</Typography>
          <br></br>
          {"Company: "}
          <Typography display="inline">{form.company}</Typography>
          <br></br>
          {"Role: "}
          <Typography display="inline">{form.role}</Typography>
          <br></br>
          {"Date of joining: "}
          <Typography display="inline">{form.date}</Typography>
          <br></br>
          {"Favourite movie: "}
          <Typography display="inline">{form.movie}</Typography>
          <br></br>
          {"Favourite sport: "}
          <Typography display="inline">{form.sport}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={(e) => prevStep(e)} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FinalStep;
