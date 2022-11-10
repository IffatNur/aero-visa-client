import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Aero-visa-${title}`;
    },[title])
}
export default useTitle;