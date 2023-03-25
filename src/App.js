import { useSelector, useDispatch } from 'react-redux';

function App() {
    const test = useSelector((state) => state.app);
    console.log(test);
    return <div></div>;
}

export default App;
