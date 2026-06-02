record Person(String name, int age) {}

import java.util.*;

public class RecordExample {
    public static void main(String[] args) {

        List<Person> list = List.of(
                new Person("Asha", 20),
                new Person("Ravi", 17),
                new Person("Kiran", 22)
        );

        list.stream()
                .filter(p -> p.age() > 18)
                .forEach(System.out::println);
    }
}