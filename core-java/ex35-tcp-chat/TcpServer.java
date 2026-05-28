import java.io.*;
import java.net.*;

public class TcpServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(6666);
        System.out.println("Server listening on port 6666...");
        Socket client = server.accept();
        System.out.println("Client connected.");
        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));
        String msg;
        while ((msg = in.readLine()) != null) {
            System.out.println("Client: " + msg);
            if (msg.equalsIgnoreCase("bye")) break;
            System.out.print("Server: ");
            out.println(console.readLine());
        }
        client.close();
        server.close();
    }
}
