# Task:
Write a function, `identical`, that checks if two lists are _circularly identical_. A circular list is where we consider the first element as being next to the last element, forming a circle.

For example, if `a = [2, 0, 5, 10, 0, 5, 7, 10]` and `b = [10, 2, 0, 5, 10, 0, 5, 7]`, then `identical(a, b)` is `True`, since these lists are circularly identical. However, if `a = [10, 10, 5, 10]` and `b = [10, 10, 10, 0]`, then `identical(a, b)` is `False`.

# Solution (Python):
```python
a = [2, 0, 5, 10, 0, 5, 7, 10]
b = [10, 2, 0, 5, 10, 0, 5, 7]
def identical_list(a, b):
  if len(a) != len(b):
    print('The lists are not circularly identical')
    return False
  check = -1
  while check < len(b) - 1:
    if(b[check + 1] != a[check]):
      print('The lists are not circularly identical')
      return False
    check += 1
  print('Lists are circularly identical')
  return True
 
identical_list(a, b)
```

# Things Learnt:
Still basics for now, still basics.
