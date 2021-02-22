import java.lang.reflect.Method; 
import java.lang.reflect.Type;
import java.util.List;
import java.util.LinkedList;

public class MethodReturnTypeCollectionGenericPractice { 

	// Main method 
	public static void main(String[] args) 
	{ 
		try { 
			// Create class object 
			Class classobj = DemoForReturnCollectionGenericParam.class; 

			// Get Method Object 
			Method[] methods = classobj.getMethods(); 

			// Iterate through methods 
			for (Method method : methods) { 
                    Type returnParam = method.getGenericReturnType(); 

					// print return Tyoe class object of method Object 
					System.out.println("\nMethod Name : " + method.getName()); 

					System.out.println("Return Type Details: " + returnParam.getTypeName()); 
			} 
			// outputs all methods including inheriting methods
			/*
			Method Name : setValue
            Return Type Details: java.util.List

            Method Name : setValue1
            Return Type Details: java.util.List<java.lang.Integer>

            Method Name : setValue2
            Return Type Details: java.util.List<java.util.List<java.lang.Integer>>

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
            Return Type Details: java.lang.Class<?>

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

class DemoForReturnCollectionGenericParam { 

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

    // Method returning List<List<Integer>> value 
	public List<List<Integer>> setValue2() 
	{ 
		System.out.println("setList<List<Integer>>Value"); 
		return new LinkedList<List<Integer>> (); 
	} 
  
}  
