import React, { useEffect, useState } from 'react';

//import { Link } from 'react-router-dom';

import tdd from '../../../assets/image/testTDD.png'
import * as Styled from '../styled';
import { MdArrowBackIos } from "react-icons/md";
import { Container } from '../../../styles/GlobalStyles';
import { useNavigate } from 'react-router-dom';

export function TestTDD(): JSX.Element {
  const navigate = useNavigate();
  return (
    <Styled.Page>
      <Styled.Container>
        <Styled.BackPage onClick={() => navigate('/')}>
          <MdArrowBackIos />
          <text>voltar</text>
        </Styled.BackPage>
        <Styled.Title>Comparativo entre distribuições Linux populares</Styled.Title>
        <Styled.Text>
          Este artigo tem como objetivo comparar oito das mais populares distribuições Linux
          disponíveis no mercado. Serão apresentadas as diferenças entre as distribuições em
          relação à descrição, seu uso, sistema de pacotes, ambiente gráfico, pontos positivos
          e negativos, forma de distribuição e arquitetura.
        </Styled.Text>
        <Styled.SubTitle>Ubuntu</Styled.SubTitle>
        <Styled.Text>
          O Ubuntu é uma das distribuições Linux mais conhecidas e utilizadas. Ele é baseado no Debian e é
          voltado para usuários domésticos e de negócios. O Ubuntu usa o sistema de pacotes APT e possui o
          ambiente gráfico GNOME. Seus pontos positivos incluem uma vasta comunidade de usuários, grande
          quantidade de pacotes disponíveis e uma vasta documentação. Seus pontos negativos incluem problemas
          de compatibilidade de hardware e possíveis bugs em atualizações.
        </Styled.Text>
        <Styled.SubTitle>Fedora</Styled.SubTitle>
        <Styled.Text>
          O Fedora é uma distribuição Linux voltada para usuários avançados e desenvolvedores. Ele é mantido pela
          comunidade Fedora Project e é baseado no Red Hat Linux. O Fedora usa o sistema de pacotes DNF e possui
          o ambiente gráfico GNOME. Seus pontos positivos incluem atualizações frequentes, grande comunidade
          de usuários e vasta documentação. Seus pontos negativos incluem possíveis bugs em atualizações e
          problemas de compatibilidade de hardware.
        </Styled.Text>
        <Styled.SubTitle>Debian</Styled.SubTitle>
        <Styled.Text>
          O Debian é uma distribuição Linux que prioriza a estabilidade e segurança. Ele é voltado para usuários avançados
          e desenvolvedores. O Debian usa o sistema de pacotes APT e possui vários ambientes gráficos disponíveis.
          Seus pontos positivos incluem alta estabilidade, grande quantidade de pacotes disponíveis e vasta documentação.
          Seus pontos negativos incluem a possibilidade de ter pacotes mais antigos e possíveis problemas de compatibilidade de hardware.
        </Styled.Text>
        <Styled.SubTitle>CentOS</Styled.SubTitle>
        <Styled.Text>
          O CentOS é uma distribuição Linux voltada para servidores e sistemas empresariais. Ele é baseado no Red Hat Enterprise Linux (RHEL)
          e é mantido pela comunidade CentOS. O CentOS usa o sistema de pacotes YUM e possui o ambiente gráfico GNOME. Seus pontos positivos
          incluem suporte a longo prazo, alta estabilidade e segurança. Seus pontos negativos incluem a falta de atualizações frequentes e
          possíveis problemas de compatibilidade de hardware.
        </Styled.Text>
        <Styled.SubTitle>Arch Linux</Styled.SubTitle>
        <Styled.Text>
          O Arch Linux é uma distribuição Linux voltada para usuários avançados que desejam uma experiência de uso personalizada.
          Ele usa o sistema de pacotes Pacman e não possui ambiente gráfico padrão, permitindo que o usuário escolha o que deseja
          instalar. Seus pontos positivos incluem grande liberdade de personalização, vasta documentação e grande quantidade de
          pacotes disponíveis. Seus pontos negativos incluem possíveis dificuldades de uso para usuários iniciantes e a possibilidade
          de possíveis problemas de compatibilidade de hardware.
        </Styled.Text>
        <Styled.SubTitle>openSUSE</Styled.SubTitle>
        <Styled.Text>
          O openSUSE é uma distribuição Linux voltada para usuários domésticos e de negócios. Ele é mantido pela comunidade openSUSE
          e usa o sistema de pacotes Zypper. O openSUSE possui vários ambientes gráficos disponíveis, incluindo KDE e GNOME.
          Seus pontos positivos incluem facilidade de uso, grande quantidade de pacotes disponíveis e vasta documentação.
          Seus pontos negativos incluem possíveis problemas de compatibilidade de hardware.
        </Styled.Text>
        <Styled.SubTitle>Manjaro</Styled.SubTitle>
        <Styled.Text>
          O Manjaro é uma distribuição Linux baseada no Arch Linux, mas com uma abordagem mais amigável para usuários iniciantes.
          Ele usa o sistema de pacotes Pacman e possui vários ambientes gráficos disponíveis. Seus pontos positivos incluem
          facilidade de uso para iniciantes, grande liberdade de personalização e vasta documentação. Seus pontos negativos
          incluem possíveis problemas de compatibilidade de hardware e possíveis dificuldades para usuários avançados acostumados
          com a abordagem do Arch Linux.
        </Styled.Text>
        <Styled.SubTitle>Mint</Styled.SubTitle>
        <Styled.Text>
          O Mint é uma distribuição Linux baseada no Ubuntu e é conhecida por sua facilidade de uso e estabilidade.
          O Mint utiliza o sistema de pacotes APT e possui vários ambientes gráficos disponíveis, incluindo Cinnamon,
          MATE e Xfce. Seus pontos positivos incluem a facilidade de uso, grande comunidade de usuários e vasta documentação.
          Seus pontos negativos incluem a possibilidade de bugs e uma seleção de pacotes mais limitada em comparação com outras distribuições.
        </Styled.Text>
        <Styled.Text>
          Cada uma dessas distribuições Linux tem suas próprias vantagens e desvantagens, dependendo das necessidades do usuário e da finalidade de uso.
          É importante considerar aspectos como estabilidade, segurança, facilidade de uso, personalização, disponibilidade de pacotes e documentação
          antes de escolher qual distribuição usar. Em geral, o Linux oferece uma grande variedade de opções e liberdade para personalizar
          e adaptar o sistema operacional às necessidades individuais do usuário.
        </Styled.Text>
        <Styled.Text>
          Muito obrigado por ler! Espero que este artigo seja útil para você.
          Sinta-se a vontade para se conectar
          comigo no <a href="https://www.linkedin.com/in/joão-ryan-santos-a196a7207/" target="_blank">LinkedIn</a> ou
          por <a href="https://github.com/joaoryan" target="_blank">Github</a>.
        </Styled.Text>
      </Styled.Container>
    </Styled.Page>
  );
}
