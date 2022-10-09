// count the number of times the sum of measurements in this sliding window increases from the previous sum
// 1. read the input file
// 2. parse the input file
// 3. compute the sums over sliding window of 3 measurements
// 4. count the number of times the sum of measurements in this sliding window increases from the previous sum
// 5. print the result
// 6. exit
// 7. end

#include <iostream>
#include <fstream>

using namespace std;

int main() {
    // 1. read the input file
    ifstream input("input.txt");
    // 2. parse the input file
    int depth;
    int count = 0;
    int prev = 1000000;
    int prev2 = 1000000;
    int prev_sum = 1000000;
    while (input >> depth) {
        // 3. compute the sums over sliding window of 3 measurements
        int sum = depth + prev + prev2;
        // 4. count the number of times the sum of measurements in this sliding window increases from the previous sum
        if ((sum > prev_sum) && (sum < 1000000)) {
            count++;
        }
        prev2 = prev;
        prev = depth;
        prev_sum = sum;
    }
    // 5. print the result
    cout << count << endl;
    // 6. exit
    return 0;
}