let Amirxon= 0;


function Muhammaddavron() {
    document.getElementById('counter-value').textContent =Amirxon;
}

document.getElementById('ahmadbek').addEventListener('click', function () {
Amirxon--;
    Muhammaddavron();
});

document.getElementById('plus').addEventListener('click', function () {
Amirxon++;
    Muhammaddavron();
});


document.getElementById('send-btn').addEventListener('click', function () {
    let INPUTQIYMATI= parseInt(document.getElementById('input-number').value);
    if (!isNaN(INPUTQIYMATI)) {
    Amirxon = INPUTQIYMATI;
    Muhammaddavron();
    } else {
        alert("Please enter a valid number");
    }
});






document.getElementById('color-btn').addEventListener('click', function () {
    let BelgilanganRang= document.getElementById('color-input').value;
    if (BelgilanganRang) {
        document.body.style.backgroundColor = BelgilanganRang; 
        document.getElementById('counter-value').style.color = BelgilanganRang; 
    } else {
       
    }
});


document.getElementById('color-input').addEventListener('input', function () {
    console.log(document.getElementById('color-input').value);
});