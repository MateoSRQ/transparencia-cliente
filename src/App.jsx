import {useEffect, useState} from 'react'
// import style from './index.module.css'
// import axios from 'axios'
import { Routes, Route, useParams } from "react-router-dom";
import App from './pages/app'
import Componente from './pages/componente'

function Component() {
    const [data, setData] = useState([])


    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:slug" element={<Componente />} />
        </Routes>
    )
}

export default Component
