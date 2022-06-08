import axios from "axios";
import React, { useEffect, useState } from "react";
import { POPULATE, PROJECT_URL } from "../utils/api";
import {
  Card,
  CardContainer,
  CardText,
  Image,
  Page,
  ProjectPage,
} from "./styles/LayoutStyles";
import {
  BlueSmallText,
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

  if (error) {
    return (
      <Page name="projects">
        <ThirdHeading>I'm sorry, something went wrong</ThirdHeading>
        <SmallText>{error.message}</SmallText>
      </Page>
    );
  }

  if (!projects) {
    return <BlueSmallText>Loading...</BlueSmallText>;
  }

  return (
    <ProjectPage name="projects">
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
                <LinkText
                  href={item.attributes.githuburl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </LinkText>
                <LinkText
                  href={item.attributes.websiteurl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </LinkText>
              </CardText>
            </Card>
          );
        })}
      </CardContainer>
    </ProjectPage>
  );
}

export default Projects;
