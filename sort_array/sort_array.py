def find_smallest(arr):
    smallest = arr[0]
    smallest_index = 0

    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    
    return smallest_index

def accending_sort(arr):
    new_arr = []
    for i in range(len(arr)):
        smallest = find_smallest(arr)
        new_arr.append(arr.pop(smallest))
    
    return new_arr

def find_largest(arr):
    largest = arr[len(arr) -1]
    largest_index = len(arr) -1

    for i in range(0, len(arr)):
        if arr[i] > largest:
            largest = arr[i]
            largest_index = i
    
    return largest_index




def descending_sort(arr):
    new_arr = []
    for i in range(0, len(arr)):
        largest = find_largest(arr)
        print(largest)
        new_arr.append(arr.pop(largest))
    
    return new_arr 

to_be_sorted = [1, 9, 8, 7, 0]

print(accending_sort(to_be_sorted ))
print(descending_sort(to_be_sorted))