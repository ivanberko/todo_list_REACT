import React, { Component } from 'react';
import shortid from 'shortid';
import TaskEditor from './TaskEditor/TaskEditor';
import TaskList from './TaskList/TaskList';
import TaskFilter from './TaskFilter/TaskFilter';
import Priority from '../utils/Priority';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
};

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    tasks: [
      {
        id: shortid.generate(),
        text: 'My job',
        completed: false,
        priority: Priority.LOW,
      },
      {
        id: shortid.generate(),
        text: 'hobby',
        completed: false,
        priority: Priority.HIGH,
      },
      {
        id: shortid.generate(),
        text: 'rest',
        completed: false,
        priority: Priority.NORMAL,
      },
    ],
    filter: '',
  };

  changeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  addTask = task => {
    const taskToAdd = {
      ...task,
      id: shortid.generate(),
      completed: false,
    };

    this.setState(prevState => ({
      tasks: [...prevState.tasks, taskToAdd],
    }));
  };

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id),
    }));
  };

  updateComleted = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  updatePriority = (id, priority) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, priority } : task,
      ),
    }));
  };

  componentDidMount() {
    const persistedTasks = localStorage.getItem('tasks');
    if (persistedTasks) {
      const tasks = JSON.parse(persistedTasks);
      this.setState({ tasks });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {tasks} = this.state
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  render() {
    const { tasks, filter } = this.state;
    const filteredTsks = filterTasks(tasks, filter);
    return (
      <div style={containerStyles}>
        <TaskEditor onAddTask={this.addTask} />
        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTsks}
          onDeleteTask={this.deleteTask}
          onUpdateCompleted={this.updateComleted}
          onUpdatePriority={this.updatePriority}
        />
      </div>
    );
  }
}
