import { Link } from "react-router-dom"

const CoreJava = () =>{
    return(
        <div>
        <div className="CoreJava">
            <label>1.What is Java?</label><br/>
            <p>Java is an Object Oriented Programming Language which is paltform independent, </p>
            <label>2.Can we override static method in java?</label>
            <p>no, we cannot override static methods because are static methods are at class level</p>
            <label>3.Can you overload main method in java</label>
            <p>Yes,we can overload main method</p>
            <label>4.Can we override private methods in java?</label>
            <p>No, we cannot override private methods because private method are available at thier class itself</p>
            <label>5.What is the base class for all the classes? and  Can you list down some of important method from object class?</label>
            <p>Object class is parent class for every class in java 
                Object class provides some methods are:
                <ul>
                <li>hascode : it returns hash values of object</li>
                <li>equals : it comares object reference</li>
                <li> wait : it causes thread to wait until notify or notifyAll </li>
                <li> finalize : this method is called before object is being garbage collected </li>
                <li>toString  : Provides String representation of the object </li>
                <li>clone : This method is used to clone the object</li>
                <li>notify : Wakes up single thread which is waiting for lock</li>
                <li>notifyAll: Wakes up all threads which is waiting for lock</li>
                </ul>
            </p>
            <label>6.Why String are immutable in Java and How can we make class is immutable</label>
            <p>String is immutable due to following reasons
                <li>Security: databaseurl, passwords are represented in strings if strings aremutable theseparameters are changed easily</li>
                <li>Synchronization and concurrency : making string immutable it make thread safe</li>
            </p>
            <p>to make a class as immutable follow below these<li>Don’t provide methods that modify the object’s state</li><li>Ensure that the class can’t be extended</li>
                <li>Make all fields final.</li><li>Make all fields private.</li><li>Ensure exclusive access to any mutable components</li></p>
            <label>7. Can you declare constructor final?</label>
            <p>no we cannot make constructor has final if we do it give compile time error as final  is not specified here</p>
            <label>8 . What is Java ClassPath?</label>
            <p>ClassPath is environment variable which java virtual machine (JVM) uses to locate all classes which is used by the program</p>
            <label>9. What is volatile in java?</label>
            <p>if we declared volatile to a varaiable it is called by the main memory rather than cpu cache so eachthread have updated value <li>volatile keyword cannot applied to classes or methods</li> </p>
            <label>10 .What are two different ways to call garbage collector?</label>
            <p>System.gc() or Runtime.getRuntime().gc()</p>
            <label>11.  What is marker interface in java? Can you provide some examples of marker interface?</label>
            <p>marker interface is an interface which is an empty interface but it provide some information to jvm when someclasses implements, example of marker interface are :<li>Serializable</li><li>Cloneable</li></p>
            <label>12 . Do you know how to make a class immutable? Can you provide steps for it?</label>
            <p>To make class has immuatabel follow these steps :
                <li>make class final so that no other class extend it</li>
                <li>make variables as final and private so that variables cannot be changed</li>
                <li>dont provide setters</li>
                <li>instantiate constructor so that they can access variables</li>
            </p>
            <label>13 . What is the difference between StringBuffer and StringBuilder?</label>
            <p>Stringbuffer is thread safe and its performance is less</p>
            <p>StringBuilder is not thread safe and its performance is efficient</p>
            <label>14 . You have a list of Custom objects? How can you sort them?</label>
            <p>to sort list of objects we can use Comparable or Comparator</p>
           <p>for more questions : <a href="https://java2blog.com/java-interview-questions-for-2-years-experience/" style={{color:'olivedrab'}}>ClickHere</a></p>
           <b style={{color:"Orange"}}>Exceptions</b>
          <label></label>
        </div>
       
        
        </div>
    )
}
export default CoreJava