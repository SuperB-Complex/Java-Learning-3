import java.util.function.Function;

public class FunctionAndThenPractice {
    public static void main(final String[] arg) {
        final Function<String, Integer> convertToInteger = input -> { return Integer.valueOf(input); };
        final Function<Integer, Integer> doMathOnInput = input -> { return Math.incrementExact(input); };
        final Function<Integer, String> convertToString = input -> { return input.toString(); };
        System.out.println(convertToInteger.andThen(doMathOnInput).andThen(convertToString).apply("0")); // 1
    }
}