import React from "react";
// import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField"; 
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  buttonStyles: {
    padding: theme.spacing(1.9)
  }
}));

const CenteredGrid = props => {
  const classes = useStyles(); 

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={2}> 
        </Grid>
        <Grid item xs={12} lg={4}>
        </Grid>
        <Grid item xs={12} lg={2}></Grid>
        <Grid item xs={12} lg={4}>
        <FormControl fullWidth variant="outlined">
            <TextField
              id="outlined-search searchFeild"
              label="Search field"
              type="search"
              variant="outlined"
              className={classes.root}
              onChange={event => {
                props.callBackData(event.target.value);
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default CenteredGrid;
