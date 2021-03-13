import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTools } from './actions';
import './styles/home.css'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class App extends Component {
  
  async componentDidMount() {

    const url = "https://ig5n6hkwtg.execute-api.sa-east-1.amazonaws.com/production/";

    const response = await fetch(url);
    const data = await response.json();

    this.props.updateTools(data);
  }


  render() {
    const list = this.props.tools.map((tool, index) => {
      return (
        <Accordion key={tool.name} className =" toolContainer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expandMoreIcon" />}
          aria-controls={"panel" + index + "-content"}
          id={"panel" + index + "-header"}
        >
          <Typography className="heading">{tool.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className="details">
          <Typography
          dangerouslySetInnerHTML={{ __html: tool.description }}
          >
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
    }) 

    return (
      <div className="container" style={{ paddingTop: '10px' }}>
        <div className="main">
          <h1 className="title">
            Desafio 1 BGC Brasil
          </h1>

          <h2 className="author">
            Pedro Vinícius Dousseau dos Santos
          </h2>

          <p className="description">
            Esta aplicação foi criada usando algumas das tecnologias pesquisadas durante o desafio, a fim de compreendê-las mais a fundo.<br/><br/>
            O front-end foi contruído com <b>ReactJS</b> + <b>Redux</b> e disponibiliza as informações de uma <b>Lambda Function</b> acionada por um evento <b>HTTP</b> gerenciado pela <b>API Gateway da AWS</b>. O deploy do backend foi feito com o <b>Serverless framework</b> e hospedado na <b>AWS</b>.<br/><br/>
            O código fonte pode ser acessado em <a target="_blank" rel="noreferrer" href="https://github.com/PedroDousseau/desafio1-bgc">https://github.com/PedroDousseau/desafio1-bgc</a>
          </p>
 
          <p className="description">
            Caso precise do arquivo <b>.docx</b>, ele pode ser baixado <a href="./desafio1-bgc-PedroDousseau.docx">aqui.</a>
          </p>

          <div className = "listContainer">
            {list}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({ tools: state.tools})   //a function describing which part of the data we need from the store.
};


const mapDispatchToProps = { //our component receives it as a prop, and it will automatically dispatch the action when it’s called. 
  updateTools: loadTools
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);