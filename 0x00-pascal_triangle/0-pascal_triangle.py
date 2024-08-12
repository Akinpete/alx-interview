#!/usr/bin/python3
"""
0-pascal_triangle
"""


def pascal_triangle(n: int) -> list:
    """
    Returns a list of integers
    representing the Pascal Triangle of n
    returns empty list if n <= 0
    """
    triangle = []
    if n <= 0:
        return triangle
    triangle = [[1]]
    for i in range(1, n):
        temp = [1]
        for j in range(len(triangle[i - 1]) - 1):
            curr = triangle[i - 1]
            temp.append(triangle[i - 1][j] + triangle[i - 1][j + 1])
        temp.append(1)
        triangle.append(temp)
    return triangle