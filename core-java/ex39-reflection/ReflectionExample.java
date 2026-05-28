import java.lang.reflect.Method;

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("java.util.ArrayList");
        System.out.println("Class: " + cls.getName());
        Method[] methods = cls.getDeclaredMethods();
        for (Method m : methods)
            System.out.println("  " + m.getName() + " (" + m.getParameterCount() + " params)");
    }
}
