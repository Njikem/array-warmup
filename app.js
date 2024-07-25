
let student_name = 'Nancy';
let student_gpa = 3.5;
honor_role = true;

if(honor_role === true){
    console.log('Congratulation, You made it')
}else{
    console.log('At least you passed')
}

if(student_gpa >= 0 && student_gpa >= 1.9){
    console.log('F')
}else if(student_gpa >= 2.0 && student_gpa >= 2.4){
    console.log('D')
}else if(student_gpa >= 2.5 && student_gpa >= 2.9){
    console.log('C')
}else if(student_gpa >= 3.0 && student_gpa >= 3.4){
    console.log('B')
}else if(student_gpa >= 3.5 && student_gpa >= 4.0){
    console.log('A')
}


let student_names = ["mauby", "Juju", "Elvis"]
let student_gpas = [2.5, 3.9, 3]
let honor_roles = [false, true, false]

    student_names.push('Bright')
    console.log(student_names)
    
    student_gpas.push('3.5')
   console.log(student_gpas)
   
    honor_roles.push(true)
    console.log(honor_roles)

