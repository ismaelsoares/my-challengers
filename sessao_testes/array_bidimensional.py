array_bidimensional = [[1, 2, 3], [4, 5, 2, 6], [7, 3, 8, 9]]
array_bidimensional2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]


# value = array_bidimensional[1][1]

# print(value)

# novo_arr = []
# for linha in array_bidimensional:
#     for valor in linha:
#         novo_arr.append(valor)

# print(novo_arr)

def array_join(arr_bidi):
    new_arr = []
    for array in arr_bidi:
        for value in array:
            new_arr.append(value)
    return new_arr


print(array_join(array_bidimensional))
