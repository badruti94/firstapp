import React from 'react'

const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return !state
            break;

        default:
            return state;
            break;
    }
}

export default loginReducer