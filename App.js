import './App.css';
import Cart from './Cart';
import { ContextProvider, cartState,reducer } from './ContextProvider';

function App() {
    return ( 
        <ContextProvider reduce={reducer} cartState={cartState}>
            <div>
                <Cart/>
            </div>
        </ContextProvider>
        
    );
}

export default App;
