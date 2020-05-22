/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { input } from './TaskFilter.module.css';

const TaskFilter = ({ value, onChangeFilter }) => (
  <input
    type="text"
    className={input}
    value={value}
    onChange={onChangeFilter}
    placeholder="Type to filter tasks..."
  />
);

TaskFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default TaskFilter;
