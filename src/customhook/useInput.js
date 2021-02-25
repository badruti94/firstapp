import {useState} from 'react'

const useInput = (initalValue) => {
    const [value, setValue] = useState(initalValue)
    const clearText = () => {
        setValue(initalValue)
    }
    const bindForm = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }
    return [value, bindForm, clearText]
}

export default useInput
