sample = "low_int-high_int" + " " + "special_char" + ":" + " " + //rest of array

count = 0
for sample in samples:
    char_count = 0
    low = low_int
    high = high_int
    special_char = special_char
    for char in password:
        if char == special_char:
            char_count++
    if char_count > low and high < char_count:
        count++

