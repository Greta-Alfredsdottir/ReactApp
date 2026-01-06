import style from './navbar.module.css'

export function Navbar (){
    return(
    <nav className={style.minNav}>
        <ul>
            <li><a href="#home">Home</a></li>
        </ul>
    </nav>
    )
}