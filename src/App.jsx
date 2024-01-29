import './App.css'
import {Layout} from "./components/Layout/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {columnsForTable1, columnsForTable2, rowsData2} from "./utils/data.js";
import {rowsData1} from "./utils/data.js";
import {ModalSectionService} from "./components/ModalBoxes/ModalSectionService/ModalSectionService.jsx";
import {StartComponent} from "./components/StartComponent/StartComponent.jsx";
import {ContentContainer} from "./components/ContentContainer/ContentContainer.jsx";
import {ModalWorkplaces} from "./components/ModalBoxes/ModalWorkplaces/ModalWorkplaces.jsx";
function App() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<StartComponent/>}/>
                        <Route path="section-services" element={
                            <ContentContainer
                                sectionName={'Категории и услуги'}
                                withTab={true}
                                initialColumns={columnsForTable1}
                                ModalComponent={ModalSectionService}
                                rowsData={rowsData1}
                            />}
                        />
                        <Route path="workplaces" element={
                            <ContentContainer
                                sectionName={'Рабочие места'}
                                withTab={false}
                                initialColumns={columnsForTable2}
                                ModalComponent={ModalWorkplaces}
                                rowsData={rowsData2}
                            />}
                        />
                </Route>
            </Routes>
      </BrowserRouter>
  )
}
export default App;
