import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./components/ProjectCard.tsx";
import "./components/theme-toggle.tsx";
import '@awesome.me/webawesome/dist/styles/themes/default.css';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dropdown/dropdown.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
import '@awesome.me/webawesome/dist/components/tree/tree.js';
import '@awesome.me/webawesome/dist/components/tree-item/tree-item.js';

// /* Import locomotive-scroll */
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import LocomotiveScroll from "locomotive-scroll";

// /* Locomotive scroll instance */
// const locomotiveScroll = new LocomotiveScroll();

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
