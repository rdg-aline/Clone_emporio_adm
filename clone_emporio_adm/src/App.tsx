import { Provider } from 'react-redux'
import Routes from './rotas/index'
import { store } from './store';


function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
