import React, { useState } from 'react';
import '../style.css';


export default function Section1() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { name: task, status: 'pending', isEditing: false }]);
      setTask('');
      alert('Task added successfully!');
    }
  };

  const handleEditTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = true;
    setTasks(updatedTasks);
  };

  const handleSaveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isEditing = false;
    setTasks(updatedTasks);
  };

  const handleTaskValueChange = (index, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = value;
    setTasks(updatedTasks);
  };

  const handleCheckTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = 'done';
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className='m-3'>
        <h4 className='text-center fs-3 main text-light'>Welcome to <b className='todo'>TODO</b> List App</h4>
        <br />
        <div className='task card container p-2 bg-gray-400'>
          <input
            id='task'
            type='text'
            name='task'
            placeholder='Enter Task'
            className='form-control inp'
            value={task}
            onChange={handleTaskChange}
          />
          <input
            id='sub'
            type='submit'
            value='Add Task +'
            className='btn btn-outline-danger sub'
            onClick={handleAddTask}
          />
        </div>
      </div>

      <div className='data card container'>
        <table id='tab'>
          <thead>
            <tr>
              <th>Tasks</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className={task.status === 'pending' ? 'pending' : 'done'}>
                {task.isEditing ? (
                  <>
                    <td>
                      <input
                        type='text'
                        value={task.name}
                        onChange={(event) => handleTaskValueChange(index, event.target.value)}
                      />
                    </td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td colSpan='2'>
                      <button onClick={() => handleSaveTask(index)}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{task.name}</td>
                    <td>{new Date().toLocaleDateString()}</td>
                    <td>{task.status === 'pending' ? 'Pending' : 'Done'}</td>
                    <td>
                      <i className='fa fa-edit' onClick={() => handleEditTask(index)}></i>{' '}
                      <i className='fa fa-trash' onClick={() => handleDeleteTask(index)}></i>{' '}
                      {task.status === 'pending' && (
                        <i className='fa fa-check' onClick={() => handleCheckTask(index)}></i>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
