import Textfield from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const StepThree = ({ handleChange, prevStep, nextStep, form }) => {
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
        label="Enter your fav movie"
        className={classes.textField}
        name="movie"
        onChange={(e) => handleChange(e)}
        value={form.movie}
      ></Textfield>

      <Textfield
        label="Enter your fav sport"
        className={classes.textField}
        name="sport"
        onChange={(e) => handleChange(e)}
        value={form.sport}
      ></Textfield>
      <br></br>
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
        style={{ background: "green", color: "white" }}
        onClick={(e) => nextStep(e)}
      >
        Finish
      </Button>
    </form>
  );
};
export default StepThree;
