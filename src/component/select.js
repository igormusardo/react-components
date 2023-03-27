import React, {Component} from 'react';
import { Input as BootstrapInput } from 'reactstrap';

export class Select extends Component {
    constructor(props) {
        super(props);
        this.disabled = props.disabled;
        this.ref = props.innerRef;
        this.value = props.value;
        this.onChange = props.onChange;
        this.onBlur = props.onBlur;
        this.id = props.id;
        this.placeholder= props.placeholder;
        this.state = {
          value: this.value,
          disabled: false
        }
      }

    _onChange = (e) => {
        e.persist();
        this.setState({value: e.target.value}, () => {
          if (this.onChange){
            this.onChange(e);
          }
        });
    }
    _onBlur = (e) => {
      e.persist();

        if (this.onBlur){
          this.onBlur(e);
        }

  }

    componentWillReceiveProps(props) {
      this.setState({ value: props.value, disabled: props.disabled })
    }

    render() {
      return (
        <BootstrapInput
            disabled={this.state.disabled}
            innerRef={this.ref}
            value={this.state.value}
            onChange={this._onChange}
            onBlur={this._onBlur}
            id={this.id}
            name={this.id}
            placeholder={this.placeholder}
            type="select">
                {this.props.children}
            </BootstrapInput>
      );
    }
  }

