import React, { useState, useEffect } from "react";
import Banner from "../component/reusable/banner";
import ContainerLayout from "../component/reusable/containerLayout";

import Filters from "../component/reusable/filters";
import FlightTable from "../component/reusable/freightTable";


import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    shipments
} from "../redux/action-creator/shipment";
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Home = props => {
  const [mount, setMount] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [searchText, setSearchText] = useState(null);

  useEffect(() => {
    if (
      tableData.length === 0 && props.shipment.getShipments.length === 0 && !mount
    ) {
      setMount(true);
      props.shipments();
    }

    if (tableData.length === 0 ) {
        setTableData(props.shipment.getShipments);
    } 
  }, [tableData, mount, props]);
  
  return (
    <div>
      <ContainerLayout>
        <Banner route="FREIGHT HUB"></Banner>
        <Filters
          data={tableData}
          callBackData={e => {
            setSearchText(e) 
          }}
        />
        {tableData && tableData.length > 0 && (
          <FlightTable data={tableData} searchPara={searchText}/>
        )}
        
        {/* {fetching && (
          <div style={{ marginTop: "12%" }}>
            <Loader color="#00BFFF" type="Plane" height={500} width={500} />
          </div>
        )} */}
      </ContainerLayout>
    </div>
  );
};

const mapStateToProps = ({ shipment }) => ({
    shipment: shipment
});

const mapDispatchToProps = disptach => ({
    shipments: () => disptach(shipments()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
