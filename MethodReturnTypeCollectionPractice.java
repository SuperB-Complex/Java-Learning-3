import java.lang.reflect.Method; 
import java.util.List;
import java.util.LinkedList;

public class MethodReturnTypeCollectionPractice { 

	// Main method 
	public static void main(String[] args) 
	{ 
		try { 
			// Create class object 
			Class classobj = DemoForReturnCollectionParam.class; 

			// Get Method Object 
			Method[] methods = classobj.getMethods(); 

			// Iterate through methods 
			for (Method method : methods) { 
                	Class returnParam = method.getReturnType(); 

					// print return Tyoe class object of method Object 
					System.out.println("\nMethod Name : " + method.getName()); 

					System.out.println("Return Type Details: " + returnParam.getName()); 
			} 
			// outputs all methods including inheriting methods
            // but generic type won't be right
			/*
			Method Name : setValue
            Return Type Details: java.util.List

            Method Name : setValue1
            Return Type Details: java.util.List

            Method Name : wait
            Return Type Details: void

            Method Name : wait
            Return Type Details: void

            Method Name : wait
            Return Type Details: void

            Method Name : equals
            Return Type Details: boolean

            Method Name : toString
            Return Type Details: java.lang.String

            Method Name : hashCode
            Return Type Details: int

            Method Name : getClass
            Return Type Details: java.lang.Class

            Method Name : notify
            Return Type Details: void

            Method Name : notifyAll
            Return Type Details: void
			*/
		} 
		catch (Exception e) { 
			e.printStackTrace(); 
		} 
	} 
} 

class DemoForReturnCollectionParam { 

	// Method returning List value 
	public List setValue() 
	{ 
		System.out.println("setListValue"); 
		return new LinkedList(); 
	} 

	// Method returning List<Integer> value 
	public List<Integer> setValue1() 
	{ 
		System.out.println("setList<Integer>Value"); 
		return new LinkedList<Integer> (); 
	} 
  
}  
