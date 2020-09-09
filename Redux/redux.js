const counter = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;

    }
}

const { createStore } = Redux;
// const createStore = Redux.createStore;
// import { createStore } from 'redux';

const store = createStore(counter);

// this is the intitial state of our application
// console.log(store.getState());

// // this is will be 1 because of the action in the render method
// // the counter function above
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());
const render = () => {
    document.body.innerText = store.getState();
}

// will render the intial state and the updated state
store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});