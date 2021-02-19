import java.util.function.Consumer;

public class ConsumerPractice { 

	public static void returnVoidMethod() {
    	System.out.println("it is the method return void");
    }
  
    public static void returnVoidMethodWithStringInput(final String input) {
    	System.out.println("it is the method with " + input + " return void");
    }
  
	public static void main(String args[]) { 
        {
            final Consumer<Integer> consumer = s -> { s = 1;};
            final Consumer<Integer> consumer1 = s -> { s++; };
            consumer1.accept(0);
            consumer1.accept(0);
        }

        {
            // final Consumer<Integer> consumer = s -> 1; incompatible types: lambda body is not compatible with a void functional interface
            final Consumer<Integer> consumer1 = s -> s++;
            consumer1.accept(1);
        }

        {
            // final Consumer<Integer> consumer = s -> return; illegal start of expression
            final Consumer<Integer> consumer1 = s -> { return; };
            final Consumer<Integer> consumer2 = s -> {};
            consumer1.accept(0);
            consumer2.accept(0);
        }

        {
            final Consumer<Object> consumer = s -> returnVoidMethod();
            final Consumer<String> consumer1 = s -> returnVoidMethodWithStringInput(s);
            consumer.accept("noteffects");
            consumer1.accept("121212");    
        }	

	} 
} 