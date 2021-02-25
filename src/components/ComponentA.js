import {useEffect} from 'react'
let renderCount = 1
const ComponentA = (props) => {
    useEffect(() => {
        renderCount++
    })

    return (
        <div>
            <h1>
                ComponentA : render {renderCount} times || Counter : {props.count}
            </h1>
        </div>
    )
}

export default ComponentA
