package io.singlefile.standard;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

// FileReader | BufferedReader | Scanner
public class StandardIOReadSingleFile {

    public static String useFileReader(final File file) {
        StringBuilder sb = new StringBuilder();
        FileReader fileReader;

        try {
            fileReader = new FileReader(file);
            int current;
            while ((current = fileReader.read()) != -1) {
                sb.append((char) current);
            }
        } catch (final FileNotFoundException e) {
            System.out.println("useFileReader method throws file not found exception");
        } finally {
            return sb.toString();
        }
    }

    public static String useBufferedReader(final File file) {
        StringBuilder sb = new StringBuilder();
        BufferedReader bufferedReader;

        try {
            bufferedReader = new BufferedReader(new FileReader(file));
            String current;
            while (!(current = bufferedReader.readLine()).isEmpty()) {
                sb.append(current);
            }
        } catch (final FileNotFoundException e) {
            System.out.println("useBufferedReader method throws file not found exception");
        } finally {
            return sb.toString();
        }
    }

    public static String useScanner(final File file) {
        StringBuilder sb = new StringBuilder();
        Scanner scanner;

        try {
            scanner = new Scanner(file);
            while (scanner.hasNextLine()) {
                sb.append(scanner.nextLine());
            }
        } catch (final FileNotFoundException e) {
            System.out.println("useScanner method throws file not found exception");
        } finally {
            return sb.toString();
        }
    }

}
