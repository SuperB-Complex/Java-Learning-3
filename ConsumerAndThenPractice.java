import java.util.function.Consumer;

public class ConsumerAndThenPractice {
    final static Integer i = 0;

    public static void main(final String[] arg) {
        
        final Consumer<Integer> convertToInteger = input -> System.out.println(input); 
        final Consumer<Integer> doMathOnInput = input -> { input = Math.incrementExact(input); System.out.println(input); }; 
        final Consumer<Integer> convertToString = input -> System.out.println(input);

        convertToInteger.andThen(doMathOnInput).andThen(convertToString).accept(i); // 0 1 0

        final Integer ii = 0;
        convertToInteger.andThen(doMathOnInput).andThen(convertToString).accept(ii); // 0 1 0

        final int iii = 0;
        convertToInteger.andThen(doMathOnInput).andThen(convertToString).accept(iii); // 0 1 0

    }
}