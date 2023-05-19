import { NavLink } from "react-router-dom"
const Navbar = () =>{
    return(
        <div className="nav-links">
            <div className="main-link"><NavLink to={'/'}>About</NavLink> </div>
            <div className="CoreJava-link"><NavLink to={'/CoreJava'}>CoreJava</NavLink></div>
            <div className="Collection-link"><NavLink to={'/Collection'}>Collection</NavLink></div>
            <div className="Java8-link"><NavLink to={'/Java8'}>Java8</NavLink></div>
            <div className="Spring-link"><NavLink to={'/Spring'}>Spring</NavLink></div> 
            <div className="SpringBoot-link"><NavLink to={'/SpringBoot'}>Springboot</NavLink></div>
            <div className="JavaSript-link"><NavLink to={'/JavaScript'}>JavaScript</NavLink></div>
            <div className="React-link"><NavLink to={'/React'}>React</NavLink></div>
            <div className="MongoDb-link"><NavLink to={'/MongoDb'}>MongoDb</NavLink></div>
        </div>
    )
}
export default Navbar