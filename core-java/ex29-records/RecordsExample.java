import java.util.List;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class RecordsExample {
    public static void main(String[] args) {
        var people = List.of(
            new Person("Alice", 25),
            new Person("Bob", 17),
            new Person("Charlie", 30)
        );
        people.forEach(System.out::println);
        var adults = people.stream()
                .filter(p -> p.age() >= 18)
                .collect(Collectors.toList());
        System.out.println("Adults: " + adults);
    }
}
