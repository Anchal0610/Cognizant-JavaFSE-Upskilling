import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, String> map = new HashMap<>();
        System.out.println("Add student entries (id name), type '0 stop' to end:");
        while (true) {
            int id = sc.nextInt();
            String name = sc.next();
            if (id == 0 && name.equals("stop")) break;
            map.put(id, name);
        }
        System.out.print("Enter ID to lookup: ");
        int key = sc.nextInt();
        System.out.println("Name: " + map.getOrDefault(key, "Not found"));
    }
}
