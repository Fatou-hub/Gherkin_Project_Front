import React from "react";

import DragAndDropContainerCommon from "../utils/DragAndDropContainerCommon";

const CommonPage = () => {
    return (
      <div>
        {/* <h1>Catalog Optimization Page</h1> */}
        <DragAndDropContainerCommon pathFilter="/Common" />
      </div>
    );
  }
  
  export default CommonPage;