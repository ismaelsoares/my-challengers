array_bidimensional = [[1, 2, 3], [4, 5, 2, 6], [7, 3, 8, 9]]

# value = array_bidimensional[1][1]


def busca_menor(arr):
    menor = arr[0]
    menor_indice = 0
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_indice = i
    return menor_indice


# for arr in array_bidimensional:
#     print(busca_menor(arr))

def order_by_selection(arr):
    new_arr = []



print(order_by_selection(array_bidimensional))
