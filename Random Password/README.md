# Task:

Write a function, `random_password`, that generates a random password with the following properties:
- each password should have a random length, of between 7 and 12 characters.
- each character of the password should be randomly selected from positions 33 to 126 of the ASCII table.

_Hints: use the random.randint(x, y) will generate a random number between x and y (inclusive); chr(n) will give you the **nth** character of the ASCII table._

# Solution (Python):
```python
import random
def random_password():
  password_len = random.randint(7, 12)
  password = ''
  for i in range(password_len):
    password += chr(random.randint(33, 126))
  return password
random_password()
```

# Things Learnt:
Today is actually the first time I'm writing Python code, will keep up with learning the basics. I'm also planning on setting my CodeWars so that I can practise there also. 🤞🏾
