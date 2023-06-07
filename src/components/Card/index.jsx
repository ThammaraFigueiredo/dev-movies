
import { getImages } from "../../services/utils/getimages"
import { Caixa } from "./styles"


function Card ({ item }){

    return (
        <Caixa>
             <img src={getImages(item.poster_path)}/>
                    <h3> {item.title || item.name}</h3>
        </Caixa>
    )
}


export default Card