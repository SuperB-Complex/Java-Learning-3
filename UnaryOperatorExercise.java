/*
https://www.geeksforgeeks.org/unaryoperator-interface-in-java/
*/

import java.util.function.UnaryOperator;
import java.util.function.Function;

public class Main {
    public static void main(String []args) {
        UnaryOperator<Boolean> identity = UnaryOperator.identity();
        System.out.println(identity.apply(true));  // true

        UnaryOperator<Integer> xor = a -> a ^ 1; 
        System.out.println(xor.apply(2));  // 3

        UnaryOperator<Integer> and = a -> a & 1; 
		Function<Integer, Integer> andThen = xor.andThen(and); 
        System.out.println(andThen.apply(2));  // 1
        
        Function<Integer, Integer> compose = xor.compose(and); 
        System.out.println(compose.apply(231));  // 0
    }
}