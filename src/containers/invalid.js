import React from "react";
import ContainerLayout from "../component/reusable/containerLayout";

import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Invalid = () => { 
  
  return (
    <div>
      <ContainerLayout>
        <Button
        component={RouterLink}
        to="/"
         >
        <img alt="" src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" />
        </Button>
      </ContainerLayout>
    </div>
  );
};



export default Invalid;
