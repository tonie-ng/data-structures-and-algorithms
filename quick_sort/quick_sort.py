def quick_sort(array):
    if len(array) < 2:
        return array
    else:
        pivot = array[0]

        less = [x for x in array[1:] if x <= pivot]

        greater = [x for x in array[1:] if x > pivot]

        return quick_sort(less) + [pivot] + quick_sort(greater)
    
print(quick_sort([10, 5, 2, 3]))

