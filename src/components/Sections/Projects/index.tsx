import React from "react";
import { StyledProjects } from "./StyledProjects";

const index = React.forwardRef((props, ref) => {
  return <StyledProjects ref={ref}>Projects</StyledProjects>;
});

export default index;
