import moment from 'moment'
import "moment/dist/locale/pt-br"

const Navbar = () => {

    const dateNow = function(){  
        
        return moment().format('LL');

    }
    
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div>{dateNow()}</div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <a class="navbar-brand" href="#">Notícias IBGE</a>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-12">

                        </div>
                    </div>
                    
                </div>
            </nav>
            <hr></hr>
        </>
    );


}

export default Navbar