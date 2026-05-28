public class SimpleClass {
    private String message;

    public SimpleClass(String msg) { this.message = msg; }

    public void printMessage() {
        System.out.println("Message: " + message);
    }

    public static void main(String[] args) {
        new SimpleClass("Hello").printMessage();
    }
}
