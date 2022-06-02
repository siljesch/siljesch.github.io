import React, { useEffect, useState } from "react";
import { Card, CardContainer, Page } from "./styles/LayoutStyles";

function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {}, []);

  return (
    <Page name="projects">
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Page>
  );
}

export default Projects;
