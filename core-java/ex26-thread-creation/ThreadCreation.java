class PrintThread implements Runnable {
    private final String message;

    PrintThread(String msg) { this.message = msg; }

    public void run() {
        for (int i = 1; i <= 5; i++)
            System.out.println(message + " - " + i);
    }
}

public class ThreadCreation {
    public static void main(String[] args) {
        Thread t1 = new Thread(new PrintThread("Thread-A"));
        Thread t2 = new Thread(new PrintThread("Thread-B"));
        t1.start();
        t2.start();
    }
}
