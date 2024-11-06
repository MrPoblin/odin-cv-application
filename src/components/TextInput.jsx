export default function TextInput({name, onInputChange, value, type = "text"}){
    return (
        <div>
            <label>{name} 
                <div>
                    <input
                        onChange={onInputChange} 
                        value={value} 
                        type={type}
                     />
                </div>
            </label>
        </div>
    );
}