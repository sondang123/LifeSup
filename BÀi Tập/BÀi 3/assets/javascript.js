var data = document.querySelectorAll('.data')
for (var i = 1; i< data.length ; i++){
    var ID = data[i].querySelector('.ID')
    if (ID.textContent % 2 === 0){
        data[i].className='background-le';
    
    }else{
        data[i].className='bacground-chan';
    }
}
