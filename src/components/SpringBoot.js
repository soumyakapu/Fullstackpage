const SpringBoot =() =>{
    return(
        <div className="SpringBoot">
           <label>1: What is Spring Boot, and how does it differ from the Spring Framework?</label>
           <p><li>SpringBoot is a opensource Framework which is built on top of the Spring Framework</li> 
            <li>which provides the default templates which reduce the boilerplate code </li>
            <li>springboot provides auto configurations and default server tomcat and jetty</li>
            <li>which is used create standalone and poduction ready applications</li>
           </p>
           <label>2: How can you create a Spring Boot application using Maven?</label>
           <p>To create SpringBoot application using maven follow below steps :
            <li>Open a command prompt or terminal and navigate to the directory where you want to create the project.</li>
           <li>Run the following command: mvn archetype:generate -DgroupId=com.example -DartifactId=demo -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false</li>
           <li>Change into the newly created project directory: cd demo</li>
           <li>Open the pom.xml file and add the Spring Boot starter dependencies.</li>
           <li>Create a class with a main method and annotate it with @SpringBootApplication</li>
           <li>Implement the required functionality in the main method or other classes.</li>
           </p>
           <label> 3: How can you configure a datasource in Spring Boot?</label>
           <p>To configure datasource follow the steps : <li>add the required datasource driver in pom.xml file</li>
           <li>add in application.properities file or application.yml file datasource related url,username , password</li>
           <li>springboot automatically configure the bean for required datasource</li>
           </p>
           <label>4: How can you implement logging in a Spring Boot application?</label>
           <p>SpringBoot uses a logging framework,logback by deafult to implement logging it use sl4f
            <li>private static final Logger logger = LoggerFactory.getLogger(className)</li>
            Use the logger to log messages at different levels, such as <li>logger.info("This is an informational message"); or logger.error("An error occurred", exception);.</li>
             </p>
             <label> 5: How can you handle exceptions in Spring Boot?</label>
             <p> Spring Boot provides several mechanisms for handling exceptions. here one of Exceptions can be handled using @ControllerAdvice and @ExceptionHandler
                <li>create a class and annotate with @ControllerAdvice and at method level annotate with @ExceptionHandler </li>
             <li>In the handler methods, define the logic to handle the exceptions, such as returning an error message or redirecting to an error page.</li>
             </p>
        </div>
    )
}
export default SpringBoot