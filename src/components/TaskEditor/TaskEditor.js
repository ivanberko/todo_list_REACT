/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { form, input, label } from './TaskEditor.module.css';

export default class TaskEditor extends Component {
  state = {
    text: '',
    priority: 'normal',
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
      priority: 'normal',
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
          <select name="priority" value={priority} onChange={this.handleChange}>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit" onClick={this.handleSubmit}>
          Create
        </button>
      </form>
    );
  }
}
