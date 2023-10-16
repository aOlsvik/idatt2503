def k_shift(k, string):
    alphabet = "abcdefghijklmnopqrstuvwxyzæøå"
    resultstring = ""
    string = string.replace(" ", "").lower()
    for letter in string:
        index = alphabet.index(letter)
        newindex = (index + k) % len(alphabet)
        resultstring += alphabet[newindex]

    return resultstring

def bruteforce(string):
    for i in range(26):
        print(k_shift(i, string))

bruteforce("YÆVFB VBVFR ÅVBV")

# hjerneneralene - hjernen er alene