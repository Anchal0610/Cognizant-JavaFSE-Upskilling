import java.io.*;
import java.net.*;

public class TcpClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 6666);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));
        String msg;
        while (true) {
            System.out.print("Client: ");
            msg = console.readLine();
            out.println(msg);
            if (msg.equalsIgnoreCase("bye")) break;
            System.out.println("Server: " + in.readLine());
        }
        socket.close();
    }
}
