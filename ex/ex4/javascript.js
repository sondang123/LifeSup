// var box1 = document.querySelector('.box1-child')
// var box2 = document.querySelector('.box2-child')
// var box3 = document.querySelector('.box2-child')
// console.log(box1)
// var textareas = document.getElementsByTagName('textarea');
 
// for (i=0;i<textareas.length;i++){
//     // you can omit the 'if' if you want to style the parent node regardless of its
//     // element type
//     if (textareas[i].parentNode.tagName.toString().toLowerCase() == 'div') {
//         textareas[i].onfocus = function(){
//             this.parentNode.style.borderStyle = 'solid';
//         }
//         textareas[i].onblur = function(){
//             this.parentNode.style.borderStyle = 'dashed';
//         }
//     }
// }

var box = document.querySelector('.box');
// console.log(box.children)
for ( var i = 0 ; i < box.children.length ; i++){
    box.children[i].parentNode.active = function(){
        box.children[i].style.zIndex == '1';
    }

}
