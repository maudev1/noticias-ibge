
import { useState, useEffect } from 'react';
import "./NewsGrid.css"
import moment from 'moment'
import "moment/dist/locale/pt-br"

const NewsGrid = () => {

    moment.locale('pt-br')

    const [news, setListNews] = useState(null);

    const createListNews = async function () {
        let news = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias');
        let response = await news.json();
        setListNews(response.items);
    }

    const imageParse = function (imageJson, type) {
        let image = JSON.parse(imageJson);

        return image[type]
    }

    const dateNormalize = function(date){   

        let formmated = moment(date, 'DD/MM/YYYY').format();
        return moment(formmated).endOf('day').fromNow();

    }

    useEffect(() => {
        createListNews()
    }, []);

    if (!news) {
        return 'Carregando...';
    }

    return (
        <>
            <div className="container">
                {news.map((n) => (
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-bg-5">
                            <a className="news-container" href={n.link} target="_blank">
                                <div className='news-header'>

                                    <h3 className='title'>{n.titulo}</h3>
                                </div>
                                <div className="news-body">
                                    <p>{n.introducao}</p>
                                </div>

                                <div className="news-footer">
                                    <p>{dateNormalize(n.data_publicacao)}</p>
                                </div>
                            </a>
                        </div>
                        <div className='col-sm-12 col-md-7 col-bg-7'>
                            <div className="news-container">
                                <img src={'http://ibge.gov.br/' + imageParse(n.imagens, 'image_intro')}></img>

                            </div>
                        </div>
                        <hr></hr>
                    </div>
                ))}
            </div>

        </>
    )

}




export default NewsGrid