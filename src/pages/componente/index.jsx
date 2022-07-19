import {useEffect, useState} from 'react'
import style from './index.module.css'
import axios from 'axios'
import {useParams} from "react-router-dom";

function Component() {
    const [data, setData] = useState([])
    let { slug } = useParams();
    console.log(slug)

    const getData = async () => {
        try {
            let response = await axios.get(import.meta.env.VITE_API_URL + 'componentes?populate[titulos][populate][0]=enlaces.enlace&filters[slug][$eq]=' + slug );
            setData(response?.data?.data[0])
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
    if (data?.attributes?.titulos ) {

        children = data.attributes.titulos.data.map((item) => {
            console.log(item)

            let gchildren = item.attributes.enlaces.data.map(subitem => {
                console.log('si')
                console.log(subitem.attributes.enlace)
               return (
                   <a href={import.meta.env.VITE_ROOT_URL + subitem.attributes.enlace.data.attributes.url}>
                       <div className={style.container}>
                           <img src="./assets/images/file.png"
                                style={{filter: 'hue-rotate(284deg)', width: '48px', transform: 'rotate(-2deg)'}}/>
                           <div className={style.subtitle}>{subitem.attributes.titulo}</div>
                           <div className={style.date}>Actualizado en {subitem.attributes.enlace.data.attributes.updatedAt}</div>

                       </div>
                   </a>
               )
            })


            return (
                <>
                    <div className={style.component_title} style={{fontSize: '1.7rem'}}>{item.attributes.titulo}</div>
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
                <div className={style.component_title} style={{width: '80%', fontWeight: 600, margin: '0 auto', marginTop: '20px', marginBottom: '60px', lineHeight: '2.3rem'}}>{data?.attributes?.titulo}</div>

                {children}
            </div>
            <code style={{width: '80%'}}>
                {JSON.stringify(data)}
            </code>
        </div>
    )
}

export default Component
