import java.lang.reflect.Method; 

public class MethodReturnTypePractice { 

	// Main method 
	public static void main(String[] args) 
	{ 
		try { 
			// Create class object 
			Class classobj = demoForReturnParam.class; 

			// Get Method Object 
			Method[] methods = classobj.getMethods(); 

			// Iterate through methods 
			for (Method method : methods) { 
                	Class returnParam = method.getReturnType(); 

					// print return Tyoe class object of method Object 
					System.out.println("\nMethod Name : " + method.getName()); 

					System.out.println("Return Type Details: " + returnParam.getName()); 
			} 
		} 
		catch (Exception e) { 
			e.printStackTrace(); 
		} 
	} 
} 

class DemoForReturnParam { 

	// Method returning int value 
	public int setValue() 
	{ 
		System.out.println("setValue"); 
		return 24; 
	} 

	// Method returning string value 
	public String getValue() 
	{ 
		System.out.println("getValue"); 
		return "getValue"; 
	} 

	// Method returning nothing 
	public void setManyValues(int value1, String value3) 
	{ 
		System.out.println("setManyValues"); 
	}  
  
    // Method returning customized type
    public demoForReturnParam setParamter() {
       System.out.println("set customized type Paramter"); 
       return new demoForReturnParam();
    }
  
}  
