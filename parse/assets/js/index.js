//  1. Console app-da bir eded daxil olunur. Eger bu eded 7-ye bolunurse ekrana "7 ye bolunur" yazilsin. Eks halda daxil olunan edede en yaxin 7-ye bolunen
//  eded ekranda yazilsin(Meselen: 17 yazilibsa ekrana  21 yox 14 cixsin, 19 yazilibsa 21 cixsin)


function dividedBy7() {
    const num = parseInt(prompt('Please enter a number: '));

    const numA = num - (num % 7); // finds the first smaller number which is divisible by 7.

    const numB = (num + 7) - (num % 7);  // finds the first larger number which is divisible by 7.

    if(num%7 == 0){
        console.log('The number is divisible by 7.');
    }
    else if (num - numA > numB - num) { // checking which one is the closest to the actual number. 
        console.log('The number is ' + numB)
    }
    else{
        console.log('The number is ' + numA);
    }
}

dividedBy7();

// 2. 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 
// 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.

function customDivision(){
    const number = parseInt(prompt('Please enter a number'));

    if(number < 50){ // checking whether it is smaller than 50 or not. 
        for (let index = 0; index < number; index++) {
            if(index%3 == 0 && index != 0){  // divisible by 3.
                console.log(index + ' ');
            }
        }
    }
    else if(number >= 50 && number <= 100){ // checking whether it is between 50 and 100 or not. 
        for (let index = 0; index < number; index++) {
            if(index%5 == 0 && index != 0){ // divisible by 5.
                console.log(index + ' ');
            }
        }
    }
    else if(number > 100){ // checking whether it is larger than 100 or not. 
        for (let index = 0; index < number; index++) {
            if(index%8 == 0 && index != 0){  // divisible by 8.
                console.log(index + ' ');
            }
        }
    }
}

customDivision();