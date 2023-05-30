import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase/config/firebaseConfig';

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

root.render(
  
        <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
            <Suspense fallback={<p>Cargando...</p>}>
                <BrowserRouter>
                <App/>
                </BrowserRouter>
            </Suspense>
        </FirebaseAppProvider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();