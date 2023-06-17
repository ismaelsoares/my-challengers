def num_quadrado(num):
    """Escreva  uma função que recebe um número inteiro qualquer, eleve ao quadrado cada um de seus algorismos e depois concatene o resultado retornando um único número inteiro"""
    convertString = str(num)
    number_square = ""

    for i in range(len(convertString)):
        convert_int = int(convertString[i])
        number_square += str(convert_int ** 2)

    return number_square


print(num_quadrado(25))
