// Calculate the average grade

function avgGrade(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let avg = 0;
    avg = sum / array.length;

    return avg;
}

let array = [85, 90, 78, 92];
console.log(avgGrade(array));
