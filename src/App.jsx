import {useEffect, useState} from 'react'
import style from './index.module.css'
import axios from 'axios'

function Component() {
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            let response = await axios.get(import.meta.env.VITE_API_URL + 'tipos?populate=componentes');
            setData(response.data.data)
        } catch (e) {
            console.log(e)
            setData([])
        }

    }

    useEffect(() => {
        getData()
    }, []);

    console.log('DATA')
    console.log(data)

    let children = null
    if (data.length) {
        children = data.map((item) => {
            console.log('item')
            console.log(item)
            let gchildren = item.attributes.componentes.data.map((child) => {
                console.log('gchild')
                console.log(child)
                return (

                    <div className={style.container}>
                        <div className={style.sub}>
                            {child.attributes.titulo}
                        </div>
                        <div className={style.description}>
                            {child.attributes.descripcion}
                        </div>
                    </div>

                )
            })

            return (
                <>
                    <div className={style.component_title}>{item.attributes.titulo}</div>
                    <div className={style.column}>
                        {gchildren}
                    </div>
                </>
            )
        })
    }


    return (
        <div className={style.component}>
            <img className={style.banner} src="./assets/images/banner.jpg"/>
            <div className={style.body}>
                {children}
            </div>
        </div>
    )
}

export default Component
