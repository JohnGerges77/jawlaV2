
import React from "react";

import VipTripsRow from "./VipTripsRow";
import ComingTripsRow from "./ComingTripsRow";

 function Trips() {
 
  
  return (
    <div className=" pl-14 mt-10 ">
     <ComingTripsRow />
<VipTripsRow />
   
 
    </div>
  );
}

export default Trips;
