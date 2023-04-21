
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

# Finding the sum of an array recursively
def sum (arr):
    if len(arr) == 0:
        return 0
    else:
        return arr[0] + sum(arr[1:])
    
print(sum([1,2,3,4,5]))