package io.singlefile.standard;

import java.io.File;
import java.util.Arrays;
import java.util.Collection;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

@RunWith(Parameterized.class)
public class StandardIOReadSingleFileTest {
    public final static String pathPrefix = "/Users/jinjinma/SuperB/Java-Learning-3/read-file-multithreads-nio/src/test/resources/";

    @Parameterized.Parameters(name = "{index}: file={0}; expectedLength={1}")
    public static Collection<Object[]> data() {
        return Arrays.asList(new Object[][] {
                {new File(pathPrefix + "example1.txt"), 20020000},
                {new File(pathPrefix + "example-small1.txt"), 500000}
        });
    }

    @Parameterized.Parameter(value = 0)
    public File file;

    @Parameterized.Parameter(value = 1)
    public int expectedLength;

    @Test
    public void useFileReaderTest() {
        Assert.assertEquals(expectedLength, StandardIOReadSingleFile.useFileReader(file).length());
    }

    @Test
    public void useBufferedReaderTest() {
        Assert.assertEquals(expectedLength, StandardIOReadSingleFile.useBufferedReader(file).length());
    }

    @Test
    public void useScannerTest() {
        Assert.assertEquals(expectedLength, StandardIOReadSingleFile.useScanner(file).length());
    }
}
