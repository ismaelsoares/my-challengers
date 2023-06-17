def media_aritmetica2(*numeros):
    """Escreva uma função que recebe um numero qualquer de números inteiros como argumentos e retorne a média aritimética entre eles """
    soma = sum(numeros)
    return (soma)/len(numeros)


def media_aritmetica(*numeros):
    soma = 0
    for num in numeros:
        soma += num
    return (soma)/len(numeros)


print(media_aritmetica(1, 2, 3, 4))
print(media_aritmetica(10, 20, 30, 40, 50))
print(media_aritmetica(15, 5))
print(media_aritmetica(20))
