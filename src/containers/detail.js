import React,{useState} from "react";
import ContainerLayout from "../component/reusable/containerLayout";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setShipments } from "../redux/actions/shipmentAction";
import DetailsView from "./../component/reusable/detailsView";
import Button from "@material-ui/core/Button";

const Detail = props => {
  const [freightData] = useState(props.shipment.getShipments[props.location.state]);
  
  const nameChange = (data)=>{
    let shipmentData =  props.shipment.getShipments
    var foundIndex = shipmentData.findIndex(x => x.id === data.ID);
    shipmentData[foundIndex].name = data.name
    props.updateShipments(shipmentData);
    navigateBack()
  }

  const navigateBack = () => {
    props.history.goBack();
  };
  
  return (
      <ContainerLayout>
        
        <div style={{marginTop : '100px'}}>
        <Button
              className="btn-goBack"
              variant="contained"
              size="large"
              onClick={() => {
                navigateBack();
              }}
            >
              HOME
            </Button>
        {freightData && <DetailsView data={freightData} updateName={nameChange} />}
        </div>
      </ContainerLayout>
  );
};

const mapStateToProps = ({ shipment }) => ({
  shipment: shipment
});

const mapDispatchToProps = disptach => ({
  updateShipments: (data) => disptach(setShipments(data))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
