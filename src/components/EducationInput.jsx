export default function EducationInput({value, onInputChange}){
    return(
        <div>
     <input
       type="text"
        name="schoolName"
        placeholder="School Name"
        value={value.schoolName}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="titleOfStudy"
        placeholder="Title of Study"
        value={value.titleOfStudy}
        onChange={onInputChange}
      />
      <input
        type="date"
        name="dateOfStudy"
        value={value.dateOfStudy}
        onChange={onInputChange}
      />
      </div>
     )
}