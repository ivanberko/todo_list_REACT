/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = ({
  id,
  text,
  priority,
  completed,
  onDeleteTask,
  onUpdateCompleted,
  onUpdatePriority,
}) => (
  <div className={`${styles.task} ${styles[`${priority}Priority`]}`}>
    <p className={styles.text}>{text}</p>

    <hr />
    <div className={styles.actions}>
      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>
      <select
        name="priority"
        value={priority}
        onChange={({ target: { value } }) => onUpdatePriority(id, value)}
      >
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>

      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={onUpdateCompleted}
        />
      </label>
    </div>
  </div>
);

Task.protoTypes = {
  text: PropTypes.string.isRequired,
  priopity: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onUpdateCompleted: PropTypes.func.isRequired,
};

export default Task;
