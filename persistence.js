function persistence(num) {
    let persist = 0
    nums = num.toString()
    while (nums.length > 1) {
      persist++;
      nums = nums.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    return persist;
}

persistence(39) // -> 3
persistence(4) // -> 4
persistence(25) // -> 2
persistence(999) // -> 4