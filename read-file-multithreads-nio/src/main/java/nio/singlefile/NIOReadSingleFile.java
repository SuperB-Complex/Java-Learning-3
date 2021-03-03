package nio.singlefile;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class NIOReadSingleFile {
    
    public static String useNIOFilesReadAllLines(final String path) {
        List<String> lines = Collections.emptyList();
        try {
            lines = Files.readAllLines(Paths.get(path), StandardCharsets.UTF_8);
        } catch (final IOException e) {
            System.out.println("useNIOFilesReadAllLines method throws file not found exception");
        } finally {
            // lines.toString() has two more characters
            StringBuilder sb = new StringBuilder();
            for (String line : lines) {
                sb.append(line);
            }
            return sb.toString();
        }
    }

    public static String useNIOFilesReadAllBytes(final String path) {
        String result = "";
        try {
            result = new String(Files.readAllBytes(Paths.get(path)));
        } catch (final IOException e) {
            System.out.println("useNIOFilesReadAllBytes method throws file not found exception");
        } finally {
            return result;
        }
    }

    public static String useNIOFilesLinesAndStream(final String path) {
        List<String> lines = Collections.emptyList();
        String result = "";
        try (final Stream<String> stream = Files.lines(Paths.get(path))) {
            result = stream.collect(Collectors.joining());
            lines = stream.collect(Collectors.toList());
        } catch(final IOException e) {
            System.out.println("useNIOFilesLinesAndStream method throws file not found exception");
        } finally {
            return result;
        }
    }

    public static String useNIOFilesNewBufferedRead(final String path) {
        List<String> lines = Collections.emptyList();
        String result = "";
        try (final BufferedReader bufferedReader = Files.newBufferedReader(Paths.get(path))) {
            result = bufferedReader.toString();
            lines = bufferedReader.lines().collect(Collectors.toList());
        } catch(final IOException e) {
            System.out.println("useNIOFilesLinesAndStream method throws file not found exception");
        } finally {
            return result;
        }
    }
}
