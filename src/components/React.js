const React = () =>{
    return(
        <div className="React">
            <label>1 . What is React?</label>
            <p>React is a open source javascript library which is build for user interface and specially for single page applications 
                <li>React is component based archiecture</li>
                <li>React was devloped by jorden Walke software engineer of facebook</li>
                <li>it is used for handling view layer in web and mobile apps based on components in a declarative approach</li>
                <li>React first deployed in facebook feedbacl in 2011 later on instgram on 2012</li>
                 </p>
                 <label>2 . Wahat are the major features of React</label>
                 <p>The major features of React are : <li>uses jsx syntax of javascript extension where devloper can write html content in  javascript</li>
                 <li>use virtual dom instead of actual dom use of real dom manipulates expensive</li>
                 <li>use server side render which makes search engine optimization </li>
                 <li>use reusable/components for ui components</li>
                 <li>follows unidirectional communication</li>
                 </p>
                 <label>3 . What is Jsx?</label>
                 <p>Jsx(javascript xml) extension syntax used by React
                    <li>used for developers to write html content in javascript</li>
                 </p>
                 <label>4. How many types of components are there in React?</label>
                 <p>Components are building blocks for creating user interface in React<li>There are two types of Components in React they are :</li>
                 <li>i.Functional Components : these are the pure javascript functions which takes props object as first parameter and return the elements to render the output</li>
                 {/* const fun = ()=>{
                    return(
                        <div></div>
                    )
                    } */}
                    <li>ii . Class Components : it use Es6 class to define components</li>
                    <li>any class that should extends React.Component</li>
                    <li>it should have render() method and then it should be return</li>
                 </p>
                 <label>5 . What is the difference between Element and Component?</label>
                 <p><li>Elements are plain objects that describes what you want to appear on the screen</li>
                 <li>Components can be declared in several ways </li>
                 </p>

                 
        </div>
    )
}
export default React