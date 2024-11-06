import './App.css';
import TextInput from './components/TextInput';
import { useState } from 'react';
import EducationInput from './components/EducationInput';
import JobInput from './components/JobInput';

function App() {

  const [nameValue, setNameValue] = useState('');
  function nameInputHandler(event){
    setNameValue(event.target.value);
  }

  const [emailValue, setEmailValue] = useState('');
  function emailInputHandler(event){
    setEmailValue(event.target.value);
  }

  const [phoneValue, setPhoneValue] = useState('');
  function phoneInputHandler(event){
    setPhoneValue(event.target.value);
  }

  function educationInputHandler(e){
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  function jobInputHandler(e){
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const [job, setJob] = useState({
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateFrom: '',
    dateTo: '',
  });

  return (
    <>
      <div className='left'>
        <TextInput name="Name" value={nameValue}  onInputChange={nameInputHandler} />
        <TextInput name="Email" type='email' value={emailValue} onInputChange={emailInputHandler}/>
        <TextInput name="Phone number" type='tel' value={phoneValue} onInputChange={phoneInputHandler} />
        <EducationInput value={education} onInputChange={educationInputHandler} />
        <JobInput value={job} onInputChange={jobInputHandler} />
      </div>
      <div className='paper'>
        <h2>{nameValue}</h2>
        <p>{emailValue}</p>
        <p>{phoneValue}</p>
        <hr className="rounded" />
        <h3>Education</h3>
        <p>{education.schoolName}</p>
        <p>{education.titleOfStudy}</p>
        <p>{education.dateOfStudy}</p>
        <hr className="rounded" />
        <h3>Practical Experience</h3>
        <p>{job.companyName}</p>
        <p>{job.positionTitle}</p>
        <p>{job.mainResponsibilities}</p>
        <p>{job.dateFrom}</p>
        <p>{job.dateTo}</p>
      </div>
    </>
  )
}

export default App
