import React, {Component} from 'react';

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];
    const renderContent = conteudos.map((element) => {
      return <>
      <ul>O conteúdo é:
      <li key="conteudo">{element.conteudo}</li>
      </ul> 
      
      <li>{element.status}</li>
      <li>{element.bloco}</li>
      </>
    });

    const renderConteudo = conteudos.map((element) => {
      const key1 = `conteudo${conteudos.indexOf(element)}`;
      return <li key={key1}>{element.conteudo}</li>
    });
    const renderStatus = conteudos.map((element) => {
      const key2 = `status${conteudos.indexOf(element)}`;
      return <li key={key2}>{element.status}</li>
    });
    const renderBloco = conteudos.map((element) => {
      const key3 = `status${conteudos.indexOf(element)}`;
      return <li key={key3}>{element.bloco}</li>
    })
    
    return (
      <>
      <ul>O conteúdo é:
        {renderConteudo}
      </ul>
      <ul>Status:
        {renderStatus}
      </ul>
      <ul>Bloco:
        {renderBloco}
      </ul>
      </>
    );
  };
};

export default Content;