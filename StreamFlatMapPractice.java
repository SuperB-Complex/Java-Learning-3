import java.util.*; 
import java.util.stream.Collectors; 

class StreamFlatMapPractice { 
	public static void main(String[] args) { 
      
        List<String> list = Arrays.asList("5.6", "7.4", "4", 
                                          "1", "2.3"); 
        list.stream().flatMap(num -> Stream.of(num)). 
                         forEach(System.out::println); 
      
		List<Integer> PrimeNumbers = Arrays.asList(5, 7, 11,13); 
		List<Integer> OddNumbers = Arrays.asList(1, 3, 5); 
		List<Integer> EvenNumbers = Arrays.asList(2, 4, 6, 8); 
		List<List<Integer>> listOfListofInts = 
				Arrays.asList(PrimeNumbers, OddNumbers, EvenNumbers); 
		System.out.println("The Structure before flattening is : " + 
												listOfListofInts); 
		List<Integer> listofInts = listOfListofInts.stream() 
									.flatMap(list -> list.stream()) 
									.collect(Collectors.toList()); 
		System.out.println("The Structure after flattening is : " + 
														listofInts); 
	} 
} 