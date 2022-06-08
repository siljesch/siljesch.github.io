import axios from "axios";
import React, { useEffect, useState } from "react";
import { POPULATE, PROJECT_URL } from "../utils/api";
import {
  Card,
  CardContainer,
  CardText,
  Image,
  Page,
} from "./styles/LayoutStyles";
import {
  LinkText,
  SmallerText,
  SmallText,
  ThirdHeading,
} from "./styles/TextStyles";

function Projects() {
  const [projects, setProjects] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(PROJECT_URL + POPULATE);
      console.log(response.data.data);
      setProjects(response.data.data);
    };
    fetchData().catch((error) => setError(error));
  }, []);

  if (!projects) {
    return <div>Loading...</div>;
  }

  return (
    <Page name="projects">
      <CardContainer>
        {projects.map((item, idx) => {
          return (
            <Card key={idx}>
              <Image
                src={item.attributes.image.data.attributes.url}
                alt="Website project"
              />
              <CardText>
                <ThirdHeading>{item.attributes.title}</ThirdHeading>
                <SmallerText>{item.attributes.description}</SmallerText>
                <LinkText to={item.attributes.githuburl}>Github Repo</LinkText>
                <LinkText to={item.attributes.websiteurl}>Website</LinkText>
              </CardText>
            </Card>
          );
        })}
      </CardContainer>
    </Page>
  );
}

export default Projects;
