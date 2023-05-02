// declarando data

let data =new Date()
document.write(data);
document.write('<br></br>')

let data1= new Date().getDate()
document.write(data1)

document.write("<br></br>")

let data2= new Date().getDate()
document.write(('0'+ data2).slice(0-2));
document.write("<br></br>")

let data4= new Date().getMonth()+1
document.write(data4)
document.write("<br></br>")

let data5= new Date().getFullYear()
document.write(data5)
document.write("<br></br>")

let data6= new Date()
let diasSemana=['domingo','segunda','terça','quarta','quinta','sexta','sabado']
document.write(diasSemana[data6.getDay()])
document.write("<br></br>")

let data7= new Date()
let dia= (('0'+ data7.getDate()).slice(0-2))
let mes= data7.getMonth()
let meses=['jeneiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
let ano= data7.getFullYear()
document.write(dia+' de '+meses[mes]+' de '+ano);




