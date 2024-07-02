import java.util.Stack;

public class BracketChecker {
    public static boolean checkBrackets(String expression) {
    Stack<Character> stack = new Stack<>();
    for (char c : expression.toCharArray()) {
    if (c == '(') {
    stack.push(c);
} else if (c == ')') {
    if (stack.isEmpty()) {
        return false;
    }
    stack.pop();
}
}
return stack.isEmpty();
}

public static void main(String[] args) {
    System.out.println(checkBrackets("()")); // выводит true
    System.out.println(checkBrackets("(()()((())))")); // выводит true
    System.out.println(checkBrackets("(((())))()")); // выводит true
    System.out.println(checkBrackets("(((())))(")); // выводит false
}
}