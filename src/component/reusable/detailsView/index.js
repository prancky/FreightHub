import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: theme.spacing(11),
  paper: {
    padding: theme.spacing(6)
  },
  buttonStyles: {
    padding: theme.spacing(1.9)
  }
}));



function DetailsView(props) {
  const classes = useStyles();
  const [freightData, setFreightData] = useState(props.data);
  const [freightName, setFreightName] = useState(props.data.name);

  // useEffect(() => {})

  const cargoList=(data)=>{ 
    return data.map((cargoObj,k)=>{
      return(
        < React.Fragment key={k}>
        <Grid  item xs={12} lg={2}>
              <FormControl fullWidth variant="outlined">
                <TextField 
                  label="Type"
                  type="text"
                  variant="outlined"
                  className={classes.root}
                  defaultValue={cargoObj.type}
                  disabled
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={4}>
              <FormControl fullWidth variant="outlined">
                <TextField 
                  label="Description"
                  type="text"
                  variant="outlined"
                  className={classes.root}
                  defaultValue={cargoObj.description}
                  disabled
                />
              </FormControl>
            </Grid>
            
            <Grid item xs={12} lg={2}>
              <FormControl fullWidth variant="outlined">
                <TextField 
                  label="Volume"
                  type="text"
                  variant="outlined"
                  className={classes.root}
                  defaultValue={cargoObj.volume}
                  disabled
                />
              </FormControl>
            </Grid>
            <Grid container spacing={3}></Grid>
        </React.Fragment>
      );
    })
  }

  const serviceList=(data)=>{ 
    return data.map((serviceObj,k)=>{
      return(
        < React.Fragment key={k}>
          <Grid item  lg={1}>
          <Chip label={serviceObj.type}  clickable
        color="primary"
        variant="outlined"  />
          </Grid>
          
        </React.Fragment>
      );
    })
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <h2>{freightData.id+" - "+freightData.name}</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-id"
                label="ID"
                type="text"
                variant="outlined"
                defaultValue={freightData.id}
                className={classes.root}
                disabled
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-status"
                label="Status"
                type="text"
                variant="outlined"
                className={classes.root}
                defaultValue={freightData.status}
                disabled
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-user-id"
                label="User ID"
                type="text"
                variant="outlined"
                className={classes.root}
                defaultValue={freightData.userId}
                disabled
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={10}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-name"
                label="Name"
                type="text"
                variant="outlined"
                defaultValue={freightName}
                className={classes.root}
                onChange={(e)=>{
                  setFreightName(e.target.value)
                  
                }}
              />
            </FormControl>
            </Grid>
            <Grid item xs={12} lg={2}>
            <FormControl fullWidth variant="outlined">
              <Button
                className={classes.buttonStyles}
                variant="contained"
                size="large"
                color="primary"
                onClick={()=>{
                  let data ={
                    name:freightName,
                    ID:freightData.id
                  }
                  props.updateName(data);
                }}
              >
                UPDATE
              </Button>
            </FormControl>
          </Grid>
          
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-mode"
                label="Mode"
                type="text"
                variant="outlined"
                className={classes.root}
                defaultValue={freightData.mode}
                disabled
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-type"
                label="Type"
                type="text"
                variant="outlined"
                className={classes.root}
                defaultValue={freightData.type}
                disabled
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-destination"
                label="Destination"
                type="text"
                variant="outlined"
                className={classes.root}
                defaultValue={freightData.destination}
                disabled
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={8}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-origin"
                label="Origin"
                type="text"
                variant="outlined"
                className={classes.root}
                defaultValue={freightData.origin}
                disabled
              />
            </FormControl>
          </Grid>
          
          <Grid item xs={12} lg={4}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-total"
                label="Total"
                type="text"
                variant="outlined"
                className={classes.root}
                defaultValue={freightData.total}
                disabled
              />
            </FormControl>
          </Grid>
           
          <Divider variant="middle" />
          <h3>Cargo Details</h3>
          <Grid container spacing={3}></Grid>
          {freightData.cargo && freightData.cargo.length > 0 && cargoList(freightData.cargo)}
          <Divider variant="middle" />
          <h3>Service Details</h3>
          <Grid container spacing={3}></Grid>
          {freightData.services && freightData.services.length > 0 && serviceList(freightData.services)}
          
        </Grid>
      </Paper>
    </div>
  );
}

export default DetailsView;
