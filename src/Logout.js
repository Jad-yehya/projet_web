import style from "./stylesheet/Navbar.module.css"
import {useDispatch} from "react-redux";
import {unlogger} from "./actions";


export function Logout() {

    const dispatch = useDispatch();


    return <button className={style.button} onClick={() => dispatch(unlogger())}>Logout</button>

}