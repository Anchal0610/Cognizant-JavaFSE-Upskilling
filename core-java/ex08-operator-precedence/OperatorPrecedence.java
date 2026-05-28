public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2;
        System.out.println("10 + 5 * 2 = " + result + "  (multiplication before addition)");
        result = (10 + 5) * 2;
        System.out.println("(10 + 5) * 2 = " + result + "  (parentheses override)");
        result = 20 / 4 * 3;
        System.out.println("20 / 4 * 3 = " + result + "  (left-to-right: / and * same precedence)");
        result = 10 + 5 - 3;
        System.out.println("10 + 5 - 3 = " + result + "  (left-to-right: + and - same precedence)");
    }
}
