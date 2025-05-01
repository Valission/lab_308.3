let csv_data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let csv_data_rows = csv_data.split("\n") 
let data = []
for(let i = 0; i < csv_data_rows.length; ++i){
    let row = csv_data_rows[i].split(",")
    data.push(row)
}
console.log(data)
console.log(data[1][0])


