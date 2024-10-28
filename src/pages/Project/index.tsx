import React from 'react';
import * as Styled from './styled';
import ProjectCard from '../../components/ProjectCard';

export function Project(): JSX.Element {

  return (
    <Styled.Page>
    <Styled.Title>Projetos</Styled.Title>
    <Styled.Content>
      <ProjectCard/>
      <ProjectCard/> 
    </Styled.Content>
  </Styled.Page>
  );
}
