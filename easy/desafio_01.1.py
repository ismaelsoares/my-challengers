# array_bidimensional = [[1, 2, 3], [4, 5, 2, 6], [7, 3, 8, 9]]
array_bidimensional = [[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]]
array_joined = []


def join_array(array_bidimensional):
    for array in array_bidimensional:
        for value in array:
            array_joined.append(value)
    return array_joined


def get_smallest():
    menor = array_joined[0]
    menor_indice = 0
    for i in range(1, len(array_joined)):
        if array_joined[i] < menor:
            menor = array_joined[i]
            menor_indice = i
    return menor_indice


def order_by_selection(arr):
    """Ordenação por seleção usando recursividade"""
    array_ordered = []
    for i in range(len(arr)):
        menor = get_smallest()
        # print(menor)
        array_ordered.append(arr.pop(menor))
    return array_ordered


join_array(array_bidimensional)
# print(get_smallest())
print(order_by_selection(array_joined))
