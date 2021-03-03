package nio.singlefile;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.util.Arrays;
import java.util.Collection;

@RunWith(Parameterized.class)
public class NIOReadSingleFileTest {
    public final static String pathPrefix = "/Users/jinjinma/SuperB/Java-Learning-3/read-file-multithreads-nio/src/test/resources/";

    @Parameterized.Parameters(name = "{index}: path={0}; expectedLength={1}")
    public static Collection<Object[]> data() {
        return Arrays.asList(new Object[][] {
                {pathPrefix + "example1.txt", 20020000},
                {pathPrefix + "example-small1.txt", 500000}
        });
    }

    @Parameterized.Parameter(value = 0)
    public String path;

    @Parameterized.Parameter(value = 1)
    public int expectedLength;

    @Test
    public void useNIOFilesReadAllLinesTest() {
        Assert.assertEquals(expectedLength, NIOReadSingleFile.useNIOFilesReadAllLines(path).length());
    }

    @Test
    public void useNIOFilesReadAllBytesTest() {
        Assert.assertEquals(expectedLength, NIOReadSingleFile.useNIOFilesReadAllBytes(path).length());
    }

    @Test
    public void useNIOFilesLinesAndStreamTest() {
        Assert.assertEquals(expectedLength, NIOReadSingleFile.useNIOFilesLinesAndStream(path).length());
    }
}
