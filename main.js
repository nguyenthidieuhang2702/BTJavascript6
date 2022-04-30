// Bài 1
function demoBreak() {
    while (S < 10000) {
        //bước nhảy của vòng lặp là n++
        n++;
        //cứ sau mỗi vòng lặp thì tổng S sẽ được cộng dồn với n cho đến khi S > 10000 thì thoát khỏi vòng lặp
        S = S + n;
    }
}
demoBreak();

// Bài 2
document.getElementById("tinhTong").onclick = function() {
    var soX = document.getElementById("soX").value;
    var soN = document.getElementById("soN").value;
    var T = 1;
    var S = 0;

    //sử dụng vòng lặp for để tính biểu thức

    for (var i = 1; i <= n; i++) {
        T = T * x;
        S = S + T;
    }

    document.getElementById("footerTinhTong").innerHTML = result;
};


// Bài 3

document.getElementById("tinhGiaiThua").onclick = function() {
    var so = document.getElementById("so").value;
    var giai_thua = 1;

    if (n == 0 || n == 1) {
        return giai_thua;
    } else {
        for (var i = 2; i <= n; i++) {
            giai_thua *= i;
        }
        return giai_thua;
    }
    document.getElementById("footerTinhGiaiThua").innerHTML = giai_thua;
}

// Bài 4

function change_backgroud() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0) {
            divs[i].style.background = "red";
        } else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
}