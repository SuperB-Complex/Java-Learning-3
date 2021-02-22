import java.lang.reflect.Method; 

public class MethodReturnTypeArrayPractice { 

	// Main method 
	public static void main(String[] args) 
	{ 
		try { 
			// Create class object 
			Class classobj = DemoForReturnArrayParam.class; 

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
			/*
            Method Name : setValue
            Return Type Details: [I

            Method Name : setValue1
            Return Type Details: [C

            Method Name : setValue2
            Return Type Details: [B

            Method Name : setValue4
            Return Type Details: [Z

            Method Name : setValue5
            Return Type Details: [S

            Method Name : setValue6
            Return Type Details: [J

            Method Name : setValue7
            Return Type Details: [D

            Method Name : setValue8
            Return Type Details: [F

            Method Name : setValue0
            Return Type Details: [Ljava.lang.Integer;

            Method Name : setValue10
            Return Type Details: [Ljava.lang.Character;

            Method Name : setValue20
            Return Type Details: [Ljava.lang.Byte;

            Method Name : setValue40
            Return Type Details: [Ljava.lang.Boolean;

            Method Name : setValue50
            Return Type Details: [Ljava.lang.Short;

            Method Name : setValue60
            Return Type Details: [Ljava.lang.Long;

            Method Name : setValue70
            Return Type Details: [Ljava.lang.Double;

            Method Name : setValue80
            Return Type Details: [Ljava.lang.Float;

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

class DemoForReturnArrayParam { 

	// Method returning int[] value 
	public int[] setValue() 
	{ 
		System.out.println("setint[]Value"); 
		return new int[0]; 
	} 

    // Method returning char[] value 
    public char[] setValue1() 
    { 
        System.out.println("setchar[]Value"); 
        return new char[1]; 
    } 
    
    // Method returning byte[] value 
    public byte[] setValue2() 
    { 
        System.out.println("setbyte[]Value"); 
        return new byte[0]; 
    } 

    // Method returning boolean[] value 
    public boolean[] setValue4() 
    { 
        System.out.println("setboolean[]Value"); 
        return new boolean[0]; 
    } 

    // Method returning short[] value 
    public short[] setValue5() 
    { 
        System.out.println("setshort[]Value"); 
        return new short[0]; 
    } 

    // Method returning long[] value 
    public long[] setValue6() 
    { 
        System.out.println("setlong[]Value"); 
        return new long[0]; 
    } 

    // Method returning double[] value 
    public double[] setValue7() 
    { 
        System.out.println("setdouble[]Value"); 
        return new double[0]; 
    } 

    // Method returning float[] value 
    public float[] setValue8() 
    { 
        System.out.println("setfloat[]Value"); 
        return new float[0]; 
    } 

    // Method returning Integer[] value 
	public Integer[] setValue0() 
	{ 
		System.out.println("setint[]boxedValue"); 
		return new Integer[0]; 
	} 

    // Method returning Character[] value 
    public Character[] setValue10() 
    { 
        System.out.println("setchar[]boxedValue"); 
        return new Character[1]; 
    } 
    
    // Method returning Byte[] value 
    public Byte[] setValue20() 
    { 
        System.out.println("setbyte[]boxedValue"); 
        return new Byte[0]; 
    } 

    // Method returning Boolean[] value 
    public Boolean[] setValue40() 
    { 
        System.out.println("setboolean[]boxedValue"); 
        return new Boolean[0]; 
    } 

    // Method returning Short[] value 
    public Short[] setValue50() 
    { 
        System.out.println("setshort[]boxedValue"); 
        return new Short[0]; 
    } 

    // Method returning Long[] value 
    public Long[] setValue60() 
    { 
        System.out.println("setlong[]boxedValue"); 
        return new Long[0]; 
    } 

    // Method returning Double[] value 
    public Double[] setValue70() 
    { 
        System.out.println("setdouble[]boxedValue"); 
        return new Double[0]; 
    } 

    // Method returning Float[] value 
    public Float[] setValue80() 
    { 
        System.out.println("setfloat[]boxedValue"); 
        return new Float[0]; 
    } 
}  
