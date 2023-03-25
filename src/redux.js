import rootReducer from './reducer/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const reduxConfig = () => {
    //createStore(reducer,Middleware)
    //applyMiddleware(thunk) giúp trả action về 1 cái hàm nếu k action chỉ là 1 object
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
};

export default reduxConfig;
