import { useEffect, useReducer } from 'react'
import axios from 'axios'
import './App.css';
import { ListGroup, ListGroupItem, Badge } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
  loading: true,
  error: "",
  todos: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        loading: false,
        error: "",
        todos: action.payload,
      }
      break;
    case 'SET_ERROR':
      return {
        loading: false,
        error: "There are some errors",
        todos: [],
      }
      break;

    default:
      return state;
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').
      then(res => {
        console.log(res.data);
        dispatch({ type: 'SET_DATA', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'SET_ERROR' })
      })

  }, [])

  const listmarkup = <ListGroup>
    {state.todos.map(todo => <ListGroupItem key={todo.id} >{todo.title} { todo.completed?(<Badge color='success' >Completed</Badge>):(<Badge color='danger' >Incompleted</Badge>) } </ListGroupItem>)}
  </ListGroup>
  return (
    <div className="App">
      {state.loading ? 'Loading' : state.error ? state.error : listmarkup}
    </div>
  );
}

export default App;
