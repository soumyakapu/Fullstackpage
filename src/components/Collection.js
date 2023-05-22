

const Collection = () =>{

    return(
        <div className="Collection">        
        <label>1. What is difference between Collection and Array</label>
         <p>Collection and Array both used to store the data an manipulate the data
       <li> Array: The size of an array is fixed and it can store only homogenous</li>
         <li>Collection :The size of Collection is growable dynamically and it can store both homogenous and hetrogeneous</li>
         </p>
         <label>2. Differentiate between Collection and collections in the context of Java.</label>
         <p>Both are present in java.utill.package</p><li>Collection is an interface, collections is a Class</li>
         <label  style={{}}><p>3. Explain breif aboout list interface and thier implemented classes</p>
         <p><li>List interface extends Collection interface and iterable </li>
         <li>List allows duplicate values and multiple null values, it maintains insertion order</li>
         <li>List is present in java.util.List package</li>
         </p>
       <p>list interface implemented by ArrayList, LinkedList,Vector,Stack </p>
         <label>1. ArrayList</label>
          <p><li>ArrayList implements List</li>
          <p>ArrayList object is created by</p><li>ArrayList arraylist = new ArrayList();</li>
                 <li>it internally follows Arrays to store the data</li>
                 <li>size is growable dynamically</li>
                 <li>it is not synchronous</li>
                 <li>it is presented in utill package</li>
                 </p>
                 <label>2. LinkedList</label>
                 <p><li>LinkedList linkedlist = new LinkedList();</li><li>we can also specify the the type using generic</li>
                  <li>LinkedList internally follows double linkedlist</li>
                  <li>it allows duplicate values and null values and follows insertion order</li></p>
                  <p>3. Vector</p>
                  <li>Vector Class implementes List, it is a legacy class</li>
                  <li>it is similar to arraylist, it allows null and duplicate values and allows insertion order</li>
                  <li>The major difference is it is synchronous</li>
                  <li>it also  allows some methods which arenot in collections</li>
                  <p>4. Stack</p>
                  <li>Stack is a class that extends Vector </li>
                  <li>it follows LIFO (Last in first Out)</li>
         </label><br/>
            <label> 4.  What is the difference between ArrayList and LinkedList? How will you decide which one you need to use?</label>
             <p> for difference between arraylist and linkedlist<a href="https:java2blog.com/difference-between-arraylist-and-linkedlist-in-java-html/" style={{color:'olivedrab'}}>  CLickHere</a></p>
         <label>5. Explain breif aboout Queue interface and thier implemented classes</label>
         <p><li>Queue interface extends Collection and iterable</li>
         <li>it is present in java.util.Queue package</li>
         <li>it follows FIFO (first in First out)</li>
         <li>it doesnot null values and duplicate value, it is Ordered </li>
         <li>Queue implementes priorityqueue, Deque ,ArrayDeque </li></p>
         <p>1.Priority Queue<li>Priority Queue inserts according to thier priority</li>
         <li>Priority Queue doesnot allows null values and duplicates</li>
         </p>
          <p>2. Deque <li>Deque is a interface which extends Queue</li>
          <li>we can add values from both ends and retrive from both ends</li>
          <li>ArrayDeque implementes Deque</li>
          </p>
          <label>6 . Explain breif aboout set interface and thier implemented classes</label>
          <p><li>set is a interface extends collections and iterable</li>
          <li>Set doesn't allow duplicates and allow only one null value and it is unordered set</li>
          <li>Set implemented classes are HashSet, linkedHashSet and TreeSet</li>
          </p>
          <p>1. HashSet <li>HashSet internally follows HashTable</li>
        </p>
        <p>2. linkedHashSet<li>linkedHashSet implementes Set and extends HashSet</li>
        <li>it allows insertion order and permits null values</li></p>
        <p>3 .TreeSet<li>Java TreeSet class implements the Set interface that uses a tree for storage.</li>
        <li>TreeSet also contains unique elements. However, the access and retrieval time of TreeSet is quite fast. The elements in TreeSet stored in ascending order.</li></p>
      <p>For more questions : <a href="https://www.javatpoint.com/java-collections-interview-questions" style={{color:'olivedrab'}}>CLickHere</a></p>
         </div>
       
    )
}
export default Collection