import React, { Component, PropTypes } from 'react';
import { Label as BootstrapLabel, Tooltip } from 'reactstrap';

export class Label extends Component {
    constructor(props){
        super(props);
        this.state = {
            texto: props.texto,
            obrigatorio: props.obrigatorio,
            htmlFor: props.htmlFor,
            tooltipOpen: false,
            // setTooltipOpen: false
          
          }
    }
    toggle = () => {
      this.setState({tooltipOpen: !this.state.tooltipOpen});
    }
    // componentDidMount(props){
    //     this.setState({ texto: this.props.texto, obrigatorio: this.props.obrigatorio })
    // }

  componentWillReceiveProps(props) {
    // componentDidUpdate(props) {

        this.setState({ 
            texto: props.texto, 
            obrigatorio: props.obrigatorio,
            htmlFor: props.htmlFor })
    }

    renderRequired(){
        if (this.state.obrigatorio){
            return <span className="text-danger" id="labelCampoObrigatorio">*
            <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="labelCampoObrigatorio" toggle={this.toggle}>
              Campo Obrigatório!
            </Tooltip></span>
            
        } else{
            return null;
        }
    }

  render() {
    // const { label } = this.props;
    // const { isChecked } = this.state;

    return (
      
        <BootstrapLabel htmlFor={this.state.htmlFor}>
            {this.renderRequired()}
            {this.props.children}
        </BootstrapLabel>
    
    );
  }
}
