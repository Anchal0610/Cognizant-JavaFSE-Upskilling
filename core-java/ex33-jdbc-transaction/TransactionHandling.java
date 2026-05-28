import java.sql.*;

public class TransactionHandling {
    public static void transfer(Connection conn, int fromId, int toId, double amount) throws SQLException {
        conn.setAutoCommit(false);
        try (PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
             PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?")) {
            debit.setDouble(1, amount);
            debit.setInt(2, fromId);
            credit.setDouble(1, amount);
            credit.setInt(2, toId);
            debit.executeUpdate();
            credit.executeUpdate();
            conn.commit();
            System.out.println("Transfer successful.");
        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transfer failed. Rolled back.");
        } finally {
            conn.setAutoCommit(true);
        }
    }

    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/community_events", "root", "");
        Statement stmt = conn.createStatement();
        stmt.execute("CREATE TABLE IF NOT EXISTS accounts (id INT PRIMARY KEY, name VARCHAR(50), balance DECIMAL(10,2))");
        stmt.execute("INSERT IGNORE INTO accounts VALUES (1, 'Alice', 1000), (2, 'Bob', 500)");
        transfer(conn, 1, 2, 200);
        conn.close();
    }
}
