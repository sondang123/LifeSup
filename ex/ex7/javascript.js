function checkmobile() {
    var mobile =document.getElementById('mobile').value;
    // var vnf_regex = /((03||[+84])+([0-9]{8}||[0-9]{9})\b)/g;
    var vnf_regex = /((09)+([0-9]{8})\b)/g || /([+84] + ([0-9]{9})\b)/g;
    if(mobile !==''){
        if (vnf_regex.test(mobile) == false) 
        {
             alert('Số điện thoại của bạn không đúng định dạng!');
        }else{
            alert('Số điện thoại của bạn hợp lệ!');
        }
    }else{
        alert('Bạn chưa điền số điện thoại!');
    }
}