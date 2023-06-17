def reverse_array(array):
    """Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem alterá-lo. Não utilize os métodos como reverse, map, forEach, etc"""
    indice = 0
    length = len(array) - 1
    array_reverse = []
    while length >= indice:
        # array_reverse.append(length_array)
        array_reverse.append(array[length])
        length -= 1
    return array_reverse


print(reverse_array([10, 72, 35, 4, 5, 66]))
print(reverse_array([30, 72, 35, 4, 5, 66]))
print(reverse_array([60, 72, 50, 40, 30, 20, 10]))
