import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SalaryCalculationPage } from './pages/SalaryCalculation'
import { SalaryConfiguration } from './pages/SalaryConfiguration'

export function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='calculo-salario' element={<SalaryCalculationPage/>}/>
                <Route path='salarios-config' element={<SalaryConfiguration/>}/>
            </Routes>
        </BrowserRouter>
    )
}