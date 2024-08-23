#!/usr/bin/python3

"""
    Interview preparation exercise: Minimum Operations
    Problem description:
    In a text file, there is a single character H. Your text editor can
    execute only two operations in this file: Copy All and Paste. Given
    a number n, write a method that calculates the fewest number of operations
    needed to result in exactly n H characters in the file.
    Prototype: def minOperations(n)
    Returns an integer
    If n is impossible to achieve, return 0
    Example:
    n = 9
    H => Copy All => Paste => HH => Paste =>HHH => Copy All
    => Paste => HHHHHH => Paste => HHHHHHHHH
    Number of operations: 6
"""

from math import sqrt


def minOperations(n):
    """
        Function that computes the minimum operations based on
        the requirements specified above
    """
    if n <= 1:
        return 0

    value = findPrimeFactor(n)
    temp = n
    result = 0
    while value != temp:
        result += value
        temp /= value
        value = findPrimeFactor(temp)

    result += value
    return int(result)


def findPrimeFactor(n):
    """
        Function that finds the lowest prime factor of a number,
        if the number is prime, returns the number itself
    """
    for i in range(2, int(sqrt(n)) + 1):
        if n % i == 0:
            return i
    return n
