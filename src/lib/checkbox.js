import React, { Component, PropTypes } from 'react';

export class Checkbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: props.checked,
          }
    }


  toggleCheckboxChange = () => {
    const { onChange, label } = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ), () => onChange(this.state.isChecked));
  }

  componentWillReceiveProps(props) {
    // componentDidUpdate(props) {

        this.setState({ isChecked: props.checked })
    }

  render() {
    const { label } = this.props;
    const { id }    = this.props;
    const { isChecked } = this.state;
    const { disabled } = this.props

    return (
      <div className="checkbox">
        <label>
          <input
                            id={id}
                            type="checkbox"
                            disabled={disabled}
                            value={'  '+label}
                            checked={isChecked}
                            onChange={this.toggleCheckboxChange}
                        />

          {label}
        </label>
      </div>
    );
  }
}
