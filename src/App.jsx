import './App.css'
import {Layout} from "./components/Layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainContent} from "./components/MainContent/MainContent.jsx";
function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<MainContent sectionName={'Раздел / услуга'}/>}/>
                        <Route path="section-services" element={<MainContent sectionName={'Раздел / услуга'}/>}/>
                        <Route path="workplaces" element={<MainContent sectionName={'Рабочие места'}/>}/>
                        <Route path="employees" element={<MainContent sectionName={'Сотрудники'}/>}/>
                        <Route path="parking-spaces" element={<MainContent sectionName={'Места на парковке'}/>}/>
                        <Route path="counter-management" element={<MainContent sectionName={'Управление счетчиком обнуления талонов'}/>}/>
                        <Route path="analytics-and-reports" element={<MainContent sectionName={'Аналитика и отчеты'}/>}/>
                        <Route path="advertising" element={<MainContent sectionName={'Реклама'}/>}/>
                        <Route path="personal-area" element={<MainContent sectionName={'Личный кабинет'}/>}/>
                </Route>
            </Routes>
      </BrowserRouter>
  )
}
export default App;
