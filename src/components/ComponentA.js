import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonGroup, Badge } from 'reactstrap';
import useCounter from "../customhook/useCounter";

const ComponentA = () => {
    const [count, increment, decrement, reset] = useCounter(10)
    return (
        <div>
            <ButtonGroup>
                <Button color="primary" outline >
                    ComponentA Counter <Badge color="secondary" > {count} </Badge>
                </Button>
            </ButtonGroup>
            <p></p>
            <ButtonGroup>
                <Button color="dark" onClick={increment}  >
                    increment
                </Button>
                <Button color="dark" onClick={decrement}  >
                    decrement
                </Button>
                <Button color="dark" onClick={reset}  >
                    reset
                </Button>
            </ButtonGroup>
            <p></p>
        </div>
    )
}

export default ComponentA
