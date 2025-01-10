import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from '../styled';
import { MdArrowBackIos } from "react-icons/md";
import NotionArticle from '../../../services/NotionArticle';

export function TestBruteForce(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Styled.Page>
      <Styled.Container>
        <Styled.BackPage onClick={() => navigate('/')}>
          <MdArrowBackIos />
          <text>voltar</text>
        </Styled.BackPage>

        <iframe src={'https://fragrant-trout-232.notion.site/NetworkChuck-132d1c69a7ac801f8f6bde7c1463d8fb'}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Notion Article" >
        </iframe>

      </Styled.Container>
    </Styled.Page>
  );
}
