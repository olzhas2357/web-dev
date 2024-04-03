n = int(input())
m = int(input())

distance = n * m 
marker_number = (distance % 109)
if marker_number < 0:
    marker_number += 109
print(int(marker_number))