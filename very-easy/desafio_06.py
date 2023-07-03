def inverter_word(word):
    word_splited = word.split()
    word_inverted = ""
    for word in word_splited:
        word_inverted += word[::-1]
        word_inverted += " "
    return word_inverted
    # return word[::-1]
    # return word_splited


print(inverter_word("Ismael Soares Doria"))
print(inverter_word("lorem ipsum dolor sit amet"))
print(inverter_word("May the force be with you"))
print(inverter_word("It's a trap"))
