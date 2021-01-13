import Textfield from "@material-ui/core/TextField";
import {
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
const StepOne = ({ handleChange, nextStep, form }) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(2),
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
  }));
  const classes = useStyles();

  return (
    <form>
      <Textfield
        label="Enter Name"
        className={classes.textField}
        name="name"
        onChange={(e) => handleChange(e)}
        value={form.name}
      ></Textfield>

      <Textfield
        label="Enter Email"
        className={classes.textField}
        name="email"
        onChange={(e) => handleChange(e)}
        value={form.email}
      ></Textfield>
      <br></br>
      <FormControl style={{ minWidth: 200, marginTop: 10 }}>
        <InputLabel>Gender</InputLabel>
        <Select
          value={form.gender}
          onChange={(e) => handleChange(e)}
          name="gender"
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"} selected>
            Female
          </MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={(e) => nextStep(e)}
      >
        Next
      </Button>
    </form>
  );
};
export default StepOne;
