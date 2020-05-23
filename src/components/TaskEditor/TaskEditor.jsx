import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrioritySelector from '../PrioritySelector/PrioritySelector';
import { form, input, label } from './TaskEditor.module.css';
import Priority from '../../utils/Priority';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  state = {
    text: '',
    priority: Priority.NORMAL,
  };

  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onAddTask } = this.props;
    onAddTask({ ...this.state });

    this.setState({
      text: '',
      priority: Priority.NORMAL,
    });
  };

  render() {
    const { text, priority } = this.state;
    return (
      <form className={form}>
        <input
          className={input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter task content..."
        />
        <label className={label}>
          Select task priority:
          <PrioritySelector
            options={options}
            value={priority}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" onClick={this.handleSubmit}>
          Create
        </button>
      </form>
    );
  }
}
