import java.util.*;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("banana", "apple", "cherry", "date");
        Collections.sort(list, (a, b) -> a.compareTo(b));
        System.out.println("Sorted: " + list);
    }
}
