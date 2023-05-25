import { ButtonPink, ButtonWhite} from "./styles"

function Button ({ children, pink }){

    return (
        <>
        {pink ? (<ButtonPink>{ children }</ButtonPink>
        ) : (
        <ButtonWhite>{ children }</ButtonWhite>
        )}
    
    
        </>
    )
}


export default Button