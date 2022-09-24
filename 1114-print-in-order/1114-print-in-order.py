class Foo:
    def __init__(self):
        pass
    is_first = False
    is_second = False

    def first(self, printFirst: 'Callable[[], None]') -> None:
        
        
        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.is_first = True


    def second(self, printSecond: 'Callable[[], None]') -> None:
        while not self.is_first:
            continue
        # printSecond() outputs "second". Do not change or remove this line.
        printSecond()
        self.is_second = True


    def third(self, printThird: 'Callable[[], None]') -> None:
        while not self.is_second:
            continue
        # printThird() outputs "third". Do not change or remove this line.
        printThird()