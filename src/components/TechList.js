import React, { Component } from 'react';
import TechItem from './TechItem/index';

class TechList extends Component {
   state = {
      newTech: '',
      techs: []
   }

   //Executado assim que o componente aparece em tela
   componentDidMount() {
      const techs = localStorage.getItem('techs');
      if(techs){
         this.setState({ techs: JSON.parse(techs) })
      }
   }

   //Executado sempre que houver alterações nas props ou estado
   componentDidUpdate(_, prevState) {
      if(prevState.tech !== this.state.techs){
         localStorage.setItem('techs', JSON.stringify(this.state.techs));
      }
   }

   //Executado quando o componente deixa de existir
   componentWillUnmount() {

   }

   handleInputChange = e => {
      this.setState({
         newTech: e.target.value
      })
   }

   handleSubmit = e => {
      e.preventDefault();

      this.setState({
         techs: [...this.state.techs, this.state.newTech],
         newTech: ''
      })
   }

   handleDelete = (tech) => {
      const t = this.state.techs.filter( t => t !== tech);

      this.setState({ techs: t });
   }
   
   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <h1>{this.state.newTech}</h1>
            <ul>
               {this.state.techs.map(tech => (
               <TechItem 
                  onDelete={() => this.handleDelete(tech)} 
                  key={tech} 
                  tech={tech} 
               />
              
            ))}
            </ul>
            <input
               type="text"
               onChange={this.handleInputChange}
               value={this.state.newTech}
            />
            <button type='submit' >Enviar</button>
         </form>
      );
   }

}

export default TechList;