import java.time.Instant;

public class VirtualThreadsExample {
    public static void main(String[] args) throws InterruptedException {
        long start = System.currentTimeMillis();
        var threads = new Thread[100_000];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = Thread.startVirtualThread(() -> {});
        }
        for (var t : threads) t.join();
        long end = System.currentTimeMillis();
        System.out.println("Launched " + threads.length + " virtual threads in " + (end - start) + " ms");
    }
}
