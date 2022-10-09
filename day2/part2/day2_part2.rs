// 1. read input file
// 2. split input into lines
// 3. iterate over lines
// 4. split line into words
// 5. if first word is equal to "up" then decrease the aim by X units
//    if first word is equal to "down" then increase the aim by X units
//    if first word is equal to "forward" then increase the horizontal position by X units
// 6. print the horizontal position and aim
// 7. exit

fn main() {
    let input = std::fs::read_to_string("../input_day2.txt").unwrap();
    let lines = input.lines();
    // set depth to 0
    let mut depth = 0;
    let mut horizontal_position = 0;
    let mut aim = 0;
    for line in lines {
        let words = line.split(" ");
        let mut words_iter = words.into_iter();
        let command = words_iter.next().unwrap();
        let units = words_iter.next().unwrap().parse::<i32>().unwrap();
        if command == "up" {
            aim -= units;
        } else if command == "down" {
            aim += units;
        } else if command == "forward" {
            horizontal_position += units;
            depth += aim * units;
        }
    }
    println!("horizontal position: {}", horizontal_position);
    println!("aim: {}", aim);
    // print product of horozontal position and depth
    println!("product: {}", horizontal_position * depth);
}