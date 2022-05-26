function checkmobile() {
  var mobile = document.getElementById("mobile").value;
  // var vnf_regex = /((03||[+84])+([0-9]{8}||[0-9]{9})\b)/g;
  // var vnf_regex = /((03)+([0-9]{8})\b)/g;
  var vnf_regex =
    /^(0|\+84)(\s|\.)?((3[2-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
  if (mobile !== "") {
    if (vnf_regex.test(mobile) == false) {
      alert("Số điện thoại của bạn không đúng định dạng!");
    } else {
      alert("Số điện thoại của bạn hợp lệ!");
    }
  } else {
    alert("Bạn chưa điền số điện thoại!");
  }
}
