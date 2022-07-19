import { Routes, Route} from "react-router-dom";
import App from './pages/app'
import Componente from './pages/componente'

function Component() {

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:slug" element={<Componente />} />
        </Routes>
    )
}

export default Component
