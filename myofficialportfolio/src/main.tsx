import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./components/project-card.tsx";
import '@awesome.me/webawesome/dist/styles/themes/default.css';

import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
