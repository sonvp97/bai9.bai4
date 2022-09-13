function monthyear1(){
    let number1=Number(document.getElementById('month').value);
    result;
    switch (number1){
        case 1:
            result="tháng 1 có 31 ngày";
            break;
        case 2:
            result="tháng 2 có 28 ngày";
            break;
        case 3:
            result="tháng 3 có  31 ngày";
            break;
        case 4:
            result="tháng 4 có 30 ngày";
            break;
        case 5:
            result="tháng 5 có 31 ngày";
            break;
        case 6:
            result="tháng 6 có 30 ngày";
            break;
        case 7:
            result="tháng 7 có 31 ngày";
            break;
        case 8:
            result="tháng 8 có 31 ngày";
            break;
        case 9:
            result="tháng 9 có 30 ngày";
            break;
        case 10:
            result="tháng 10 có 31 ngày";
            break;
        case 11:
            result="tháng 11 có 30 ngày";
            break;
        case 12:
            result="tháng 12 có 31 ngày";
            break;
        default:
            result="Không có tháng này"
    }
    document.getElementById('result').innerHTML=result;
}
function monthyear2(){
    let number2=Number(document.getElementById('month1').value);
    result1;
    switch (number2){
        case 1:
            result1="tháng 1 có 31 ngày";
            break;
        case 2:
            result1="tháng 2 có 28 ngày";
            break;
        case 3:
            result1="tháng 3 có  31 ngày";
            break;
        case 4:
            result1="tháng 4 có 30 ngày";
            break;
        case 5:
            result1="tháng 5 có 31 ngày";
            break;
        case 6:
            result1="tháng 6 có 30 ngày";
            break;
        case 7:
            result1="tháng 7 có 31 ngày";
            break;
        case 8:
            result1="tháng 8 có 31 ngày";
            break;
        case 9:
            result1="tháng 9 có 30 ngày";
            break;
        case 10:
            result1="tháng 10 có 31 ngày";
            break;
        case 11:
            result1="tháng 11 có 30 ngày";
            break;
        case 12:
            result1="tháng 12 có 31 ngày";
            break;
        default:
            result1="Không có tháng này"
    }
    document.getElementById('result1').innerHTML=result1;
}