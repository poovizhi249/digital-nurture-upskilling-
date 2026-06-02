public class MethodOverloading {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {

        MethodOverloading obj = new MethodOverloading();

        System.out.println("2 int: " + obj.add(2, 3));
        System.out.println("2 double: " + obj.add(2.5, 3.5));
        System.out.println("3 int: " + obj.add(1, 2, 3));
    }
}
