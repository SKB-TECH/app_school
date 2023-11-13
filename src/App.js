import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
import { Navbar, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Pyramid, Customers, Kanban, ColorMapping, ColorPicker, Editor, Calendar, Stacked, Employes, Area, Pie, Bar, Financial, Line } from './pages';
import { useStateContext } from './contexts/ContextProvider';

const App = () => {
  const { activeMenu, themeSetting, setThemeSetting, currentColor, currentMode } = useStateContext();
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className=" flex  relative dark:bg-main-dark-bg">
          <div className="right-4 bottom-4 fixed " style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl hover:bg-light-gray text-white hover:drop-shadow-xl p-3"
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => { setThemeSetting(true); }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* debut sidebar */}
          {
            activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"><Sidebar /></div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg"><Sidebar /></div>
            )
          }
          {/* fin sidebar */}
          <div className={`dark:bg-secondary-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className="fixed md:static bg-main-bg dark:bg-secondary-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              { themeSetting && <ThemeSettings />}
              <Routes>
                {/* Dashborad Home */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employes />} />
                <Route path="/customers" element={<Customers />} />

                {/*  Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
