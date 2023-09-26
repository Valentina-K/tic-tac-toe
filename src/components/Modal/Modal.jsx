import { Backdrop, ModalWindow } from "./Modal.styled";
export const Modal = ({active, setActive, children})=>{
    return (
        <Backdrop active={active} onClick={()=>setActive(false)}>
            <ModalWindow onClick={(e)=>e.stopPropagation()}>
                {children}
            </ModalWindow>
        </Backdrop>       
    )
}