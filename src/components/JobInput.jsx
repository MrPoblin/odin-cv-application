export default function JobInput({value, onInputChange}){
    return(
        <div>
     <input
       type="text"
        name="companyName"
        placeholder="Company Name"
        value={value.companyName}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="positionTitle"
        placeholder="Position Title"
        value={value.positionTitle}
        onChange={onInputChange}
      />
      <input
        type="text"
        name="mainResponsibilities"
        placeholder="Main Responsibilities"
        value={value.mainResponsibilities}
        onChange={onInputChange}
      />
      <input
        type="date"
        name="dateFrom"
        value={value.dateFrom}
        onChange={onInputChange}
      />
      <input
        type="date"
        name="dateTo"
        value={value.dateTo}
        onChange={onInputChange}
      />
      </div>
     )
}