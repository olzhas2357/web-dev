answer_system = int(input())  
answer_student = int(input())  

if answer_system == answer_student and (answer_student == 1 or answer_system == 1):
    print("YES")
else:
    print("NO")