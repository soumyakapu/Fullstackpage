const Spring = ()=>{
        return(
        <div>
            <label>1. What is dependency injection, and how does Spring support it?</label>
            <p><li>Dependency injection is a design pattern that supports to create loosely coupled components
                through the Inversion of Control (IOC) 
            </li>
            <li>Spring supports Dependency injection by two ways constructor injection, setter injection</li>
            <li>constructor injection invovles provide dependencies through the class constructor</li>
            <li>setter injection invovles provide dependencies through the setter methods</li>
            </p>
            <label>2 . Explain the various types of bean scopes in Spring.</label>
            <p>Spring scopes can be created in many ways :
                <li>Singleton : only once instance of bean is created per spring IOC container </li>
                <li>Prototype : instance of bean is created per each request </li>
                <li>Request : instance is created for each Http request</li>
                <li>Session : instance is created for each Http Session</li>
                <li>Custom : instance can be defined based on requirements </li>
            </p>
            <label>3.  What is the difference between @Component, @Service, and @Repository annotations in Spring?</label>
            <p>These annotations are specified to be  spring managed beans
                <li>@Component : General purpose it is managed by the spring </li>
                <li>@Service : if a class annotated with this then these class behaves like a service layer</li>
                <li>@Repository : it behaves like a data-access </li>
            </p>
            <label>4 . What is SpringFramework , what are the key features of it</label>
            <p>SpringFramework is a open source java based framework which is used to build java based applications
                <li>The key features of SpringFramework are :</li>
                <li>Dependency injection, IOC</li>
                <li>Spring Aop</li>
                <li>Spring Mvc for web applications</li>
                <li>Spring Security for Aunthentication and authorization</li>
                <li>Spring batch for batch processing</li>
                <li>spring integrations for enterprise integration patterns</li>
            </p>
            <label>5. What is the difference between constructor injection and setter injection in Spring?</label>
            <p><li>constructor injection provides dependencies through class constructor as arguments once created it cannot be changed</li>
            <li>setter injection provides dependencies through setter methods it can be called multiple times</li>
            </p>
            <label>6. Explain the concept of aspect-oriented programming (AOP) and its use in Spring.</label>
            <p></p>
        </div>
    )
}
export default Spring