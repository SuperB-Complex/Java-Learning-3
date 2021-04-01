interface InterfaceTest {
    default void display() {
        this.defaultMethod();
        // same as 
        // InterfaceTest.this.defaultMethod()
        InterfaceTest.this.abstractMethod();
        // same as
        // this.abstractMethod();
        System.out.println("InterfaceOne method displayed");
    }

    default void defaultMethod() {
        System.out.println("defaultMethod of InterfaceOne called");
    }

    void abstractMethod();
}

class TestImp implements InterfaceTest {

    @Override
    public void defaultMethod() {
        System.out.println("xxxx");
    }

    @Override
    public void abstractMethod() {
        System.out.println("oooo");
    }
}

public class Test {
    public static void main(String args[]) {
        TestImp imp=new TestImp();
        imp.display();
    }
}


//console print out:
// xxxx
// oooo
// InterfaceOne method displayed