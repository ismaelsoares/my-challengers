import unicodedata
# def search_letter_high(word):
#     alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
#                 "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


def no_space(word):
    """Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços."""
    word_no_space_lower = unicodedata.normalize("NFKD", word).encode(
        "ASCII", "ignore").decode("ASCII").replace(" ", "").lower()
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    high_letter = 0
    for index_word in range(len(word_no_space_lower)):
        for index_letter in range(len(alphabet)):
            if (word_no_space_lower[index_word].find(alphabet[index_letter]) != -1):
                if index_letter > high_letter:
                    high_letter = index_letter
    return alphabet[high_letter]


print(no_space("Ismáêl Soãres Dória"))
