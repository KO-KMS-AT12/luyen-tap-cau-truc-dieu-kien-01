//
// Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
//
// Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh
// đó không đủ điều kiện vào học lớp 10.
//
// Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình
// để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
//
// Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
//
// Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra,
// điểm thi giữa kỳ, điểm thi cuối kỳ
//
// Bài 6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
//
// Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho


function bai1() {
    var a = parseInt(prompt("Nhap vao a"));
    var b = parseInt(prompt("Nhap vao b"));
    if (a % b == 0) {
        document.write(a + ' chia het cho ' + b + '<br>');
    } else {
        document.write(a + ' khong chia het cho ' + b + '<br>');
    }
}

bai1();

function bai2() {
    var age = parseInt(prompt("Nhap vao tuoi hoc sinh"));
    if (0 < age && age < 16) {
        document.write("Hoc sinh moi " + age + " khong du tuoi hoc lop 10 <br>")
    } else {
        document.write("Hoc sinh da " + age + '<br>');
    }
}

bai2();

function bai3() {
    var number = parseInt(prompt("Nhap so nguyen bat ki"));
    if (number > 0) {
        document.write(number + " lon hon 0 <br>")
    } else if (number < 0) {
        document.write(number + " nho hon 0<br>")
    } else {
        document.write(number + " bang 0<br>")
    }
}

bai3();

function bai4() {
    var a = parseInt(prompt("Nhap vao a"));
    var b = parseInt(prompt("Nhap vao b"));
    var c = parseInt(prompt("Nhap vao c"));
    return document.write("Max trong " + a + ", " + b + ", " + c + " la" + Math.max(a, b, c) + "<br>");
}

bai4();

function bai5() {
    var diemGiuaKi = parseFloat(prompt("Nhap diem giua ki la"));
    var diemCuoiKi = parseFloat(prompt("Nhap diem cuoi ki la"));
    var avg = (diemCuoiKi * 2 + diemGiuaKi * 3) / 5;
    if (0 <= avg && avg < 4) {
        document.write("Diem tong ket: " + avg + " dat hoc sinh yeu<br>");
    }
    if (4 <= avg && avg < 6) {
        document.write("Diem tong ket: " + avg + " dat hoc sinh trung binh<br>");
    }
    if (6 <= avg && avg < 8) {
        document.write("Diem tong ket: " + avg + " dat hoc sinh kha<br>");
    }
    if (8 <= avg) {
        document.write("Diem tong ket: " + avg + " dat hoc sinh gioi<br>");
    }
}

bai5();

function bai6() {
    var doanhThu = parseInt(prompt("Nhap doanh thu ban hang (USD)"));
    if (0 < doanhThu < 1000) {
        let phanTramHoaHong = 3;
        var tienHoaHong = (doanhThu * phanTramHoaHong) / 100;
        document.write("Tien hoa hong nhan duoc la " + tienHoaHong + '<br>' + " USD");
    } else if (1000 <= doanhThu < 3000) {
        let phanTramHoaHong = 4.5;
        document.write("Tien hoa hong nhan duoc la " + tienHoaHong + '<br>' + " USD");
    } else if (3000 <= doanhThu < 8000) {
        let phanTramHoaHong = 7.3;
        document.write("Tien hoa hong nhan duoc la " + tienHoaHong + '<br>' + " USD");
    } else {
        let phanTramHoaHong = 14.8;
        document.write("Tien hoa hong nhan duoc la " + tienHoaHong + '<br>' + " USD");
    }
}

bai6();

function bai7() {
    var thoiGianGoi = parseFloat(prompt("Nhap thoi gian goi di cua thue bao (phut)"))
    if (0 < thoiGianGoi && thoiGianGoi < 10) {
        document.write("Phi cuoc cua " + thoiGianGoi + " la:" + thoiGianGoi * 250 + ' VND');
    }
    if (10 <= thoiGianGoi && thoiGianGoi < 20) {
        document.write("Phi cuoc cua " + thoiGianGoi + " la:" + thoiGianGoi * 220 + +' VND');
    } else {
        document.write("Phi cuoc cua " + thoiGianGoi + " la:" + thoiGianGoi * 200 + ' VND');
    }
}

bai7();