const size = 6;
const symbol = "-";
const empty = " ";


for (let i = 1; i <= size; i++) {
    
    symbol.length < (size * 2) ? console.log(empty.repeat((size * 2 / 2) - i) + (symbol+empty).repeat(i) + "\n") : console.log(symbol+empty.repeat(i));
        
}