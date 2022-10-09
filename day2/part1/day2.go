// Calculate the horizontal position and depth you would have after following the planned course.
// The position is calculated from the current position and the planned course.
// The depth is calculated from the current depth and the planned depth.
// The planned course is the course you would have if you followed the planned course.
// 1. read input file
// 2. read next command and number of units
// 3. if forward then increase horizontal position by X units
//	  if down then increase depth by X units
//    if up then decrease depth by X units
// 4. after following these instructions multiply your final horizontal position by your final depth and print result

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	// 1. read input file
	file, err := os.Open("input_day2.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()
	// set horizontal position to 0
	horizontalPosition := 0
	// set depth to 0
	depth := 0
	scanner := bufio.NewScanner(file)
	//read lines until EOF
	for scanner.Scan() {
		// 2. read line from file
		line := scanner.Text()
		// read a string and a number
		// 2. read next command and number of units
		res := strings.Split(line, " ")
		command := res[0]
		units, err := strconv.Atoi(res[1])
		if err != nil {
			panic(err)
		}
		// if command is forward then increase horizontal position by X units
		if command == "forward" {
			horizontalPosition += units
		}
		// if command is down then increase depth by X units
		if command == "down" {
			depth += units
		}
		// if command is up then decrease depth by X units
		if command == "up" {
			depth -= units
		}

	}
	// multiply your final horizontal position by your final depth and print result
	fmt.Println(horizontalPosition, depth)
	fmt.Println(horizontalPosition * depth)
}
