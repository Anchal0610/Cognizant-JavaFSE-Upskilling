import java.sql.*;

class StudentDAO {
    private Connection conn;

    public StudentDAO(Connection conn) { this.conn = conn; }

    public void insertStudent(String name, String email) throws SQLException {
        String sql = "INSERT INTO Users (full_name, email) VALUES (?, ?)";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, name);
            ps.setString(2, email);
            ps.executeUpdate();
            System.out.println("Inserted: " + name);
        }
    }

    public void updateStudent(int id, String newName) throws SQLException {
        String sql = "UPDATE Users SET full_name = ? WHERE user_id = ?";
        try (PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, newName);
            ps.setInt(2, id);
            ps.executeUpdate();
            System.out.println("Updated user " + id);
        }
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/community_events", "root", "");
        StudentDAO dao = new StudentDAO(conn);
        dao.insertStudent("TestUser", "test@example.com");
        dao.updateStudent(1, "Alice Updated");
        conn.close();
    }
}
