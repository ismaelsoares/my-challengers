def print_chunk(num):
    """Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço '-' sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc)"""
    if num == 1:
        return "chunk"
    else:
        return "chunk-" + print_chunk(num - 1)


print(print_chunk(8))
# def fatorial(n):
#     if n == 0:
#         return 1
#     else:
#         return n * fatorial(n - 1)


# print(fatorial(5))
