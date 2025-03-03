import './style.css';

const InputFieldGrows = () => {
  return (
    <>
      <div className='flex flex-col items-start mb-4'>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' placeholder='John' />
      </div>

      <div className='flex flex-col items-start mb-4'>
        <label htmlFor='role'>Role</label>
        <select name='role' id='role'>
          <option value='developer'>Developer</option>
          <option value='designer'>Designer</option>
          <option value='manager'>Manager</option>
        </select>
      </div>

      <div className='flex flex-col items-start mb-4'>
        <label htmlFor='bio'>Bio</label>
        <textarea id='bio' placeholder='Tell us about yourself'></textarea>
      </div>
    </>
  );
};

export default InputFieldGrows;
