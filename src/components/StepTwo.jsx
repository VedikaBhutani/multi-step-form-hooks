import Textfield from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const StepTwo = ({ handleChange, nextStep, prevStep, form }) => {
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
        label="Enter your company name"
        className={classes.textField}
        name="company"
        onChange={(e) => handleChange(e)}
        value={form.company}
      ></Textfield>
      <Textfield
        label="Enter your role"
        className={classes.textField}
        name="role"
        onChange={(e) => handleChange(e)}
        value={form.role}
      ></Textfield>
      <Textfield
        label="Date of joining"
        name="date"
        type="date"
        defaultValue={form.date || "1999-12-31"}
        onChange={(e) => handleChange(e)}
      />
      <br></br>{" "}
      <Button
        className={classes.button}
        variant="contained"
        onClick={(e) => prevStep(e)}
      >
        Prev
      </Button>
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
export default StepTwo;
