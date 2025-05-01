str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'


let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

let currentStr = '';
let data =[
    
]
let cell1Complete = false;
let cell2Complete = false;
let cell3Complete = false;
let cell4Complete = false;

let foundSpace = false;
let numCommas = 0;
let loggingComplete = false;
let i = 0;

while (!loggingComplete) {

    if (numCommas === 3 ){
        while (true) {
            if (str[i] === '\n' || i === str.length) {
                break
            } else {
                cell4 += str[i]
                i ++
            }
        }
        console.log(`${cell1},${cell2},${cell3},${cell4}`)
        numCommas = 0
        cell1Complete = false;
        cell2Complete = false;
        cell3Complete = false;
        cell4Complete = false;
        cell1 = ''
        cell2 = ''
        cell3 = ''
        cell4 = ''
    }
    else if (str[i] === ',') {
        numCommas++

        if (!cell1Complete) {
            cell1 = currentStr
            currentStr = ''
            cell1Complete = true

        } else if (!cell2Complete) {

            cell2 = currentStr
            currentStr = ''
            cell2Complete = true;

        } else if (!cell3Complete) {

            cell3 = currentStr
            currentStr = ''
            cell3Complete = true;

        } else if (!cell4Complete) {
        
            cell4 = currentStr
            currentStr = ''
            cell4Complete = true;
        }

    } else {
        if (i >= str.length) {
            loggingComplete = true;
        }
        currentStr += str[i]
    }
    i ++
}