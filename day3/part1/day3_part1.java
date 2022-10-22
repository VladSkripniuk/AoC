// 1. read input from file
// 2. set counter of size n to 0
// 3. for line in input
// 4. for character in line
// 5. if character is "1" increment counter at index of character
// 6. set num_lines to number of lines in input
// 7. set gamma_rate to 0
// 8. set i-th bit of gamma_rate to 1 if counter[i] is greater than num_lines/2
// 9. print gamma_rate * (2^n - gamma_rate)
// 10. exit

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class day3_part1 {
	public static void main(String[] args) throws FileNotFoundException {
		Scanner input = new Scanner(new File(args[0]));
        String line = input.nextLine();
        int num_lines = 1;
		int n = line.length();
		int[] counter = new int[n];
		for (int i = 0; i < n; i++) {
			counter[i] = 0;
		}
        for (int i = 0; i < n; i++) {
            if (line.charAt(i) == '1') {
                counter[i]++;
            }
        }
		while (input.hasNextLine()) {
			line = input.nextLine();
            num_lines++;
            for (int i = 0; i < n; i++) {
                if (line.charAt(i) == '1') {
                    counter[i]++;
                }
            }
        }
        int gamma_rate = 0;
        for (int i = 0; i < n; i++) {
            if (counter[i] > num_lines/2) {
                gamma_rate += Math.pow(2, n - i - 1);
            }
        }
        // print gamma_rate * (2^n - gamma_rate)
        System.out.println(gamma_rate * (Math.pow(2, n) -1 - gamma_rate));
        // exit
    }
}
