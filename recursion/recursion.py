
def countdown(i):
    print(i)
    
    if i <= 0:
        return
    else:
        countdown(i-1)
    

countdown(10)


def fact(x):
 if x == 1:
    return 1
 else:
    return x * fact(x-1)


def main():
   print(fact(5))

main()