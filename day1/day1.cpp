// count the number of times a depth measurement increases from the previous measurement.
// 1. read the input file
// 2. parse the input file
// 3. count the number of times a depth measurement increases from the previous measurement.
// 4. print the result
// 5. exit
// 6. end

#include <iostream>
#include <fstream>

using namespace std;

int main() {
    // 1. read the input file
    ifstream input("input.txt");
    // 2. parse the input file
    int depth;
    int count = 0;
    int prev = 1000000000;
    while (input >> depth) {
        // 3. count the number of times a depth measurement increases from the previous measurement.
        if (depth > prev) {
            count++;
        }
        prev = depth;
    }
    // 4. print the result
    cout << count << endl;
    // 5. exit
    return 0;
}