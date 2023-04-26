function validateForm() {
  const name = document.getElementById("name").value;
  const pass = document.getElementById("pass").value;
  const confirm = document.getElementById("confirm").value;
  const phone = document.getElementById("phone").value;
  if (/^[^0-9]+$/.test(name)) {
    document.getElementById("name").value;
  } else {
    document.getElementById("err_name").textContent = "Họ và tên không hợp lệ.";
  }
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(pass)) {
    document.getElementById("pass").value;
  } else {
    document.getElementById("err_pass").textContent = "Nhập đúng định dạng mật khẩu";
  }
  if (confirm == pass) {
    document.getElementById("pass").value;
  } else {
    document.getElementById("err_confirm").textContent ="Mật khẩu không khớp";
  }
  if (/^[0-9]+$/.test(phone)) {
    document.getElementById("phone").value;
  } else {
    document.getElementById("err_phone").textContent = "Số điện thoại không hợp lệ";
  }
}
