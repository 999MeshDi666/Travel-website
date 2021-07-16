 // var btn = document.getElementById('btn');
 // btn.onclick = function () {
 //    alert('Click');
 // };

 // var btn = document.getElementById('btn');
 // btn.onclick = function () {
 //    var text = document.querySelector('p.header_text')
 //    text.classList.add('red');
 // };


// from2 switch
 var btn = document.getElementById('btn');
    btn.onclick = function () {
        var form2 = document.querySelector('form.form2')
        form2.classList.remove('form2_display_off')
        form2.classList.add('form2_display_on');
        
    };

 var btn2 = document.getElementById('form2_btn');
    btn2.onclick = function () {
        var form2 = document.querySelector('form.form2')
        form2.classList.add('form2_display_off');
    };
    
//for section1
$(function(){
    $(window).scroll(function(){
        $('#sec1 .sec_headline').each(function(){
            var imgPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if(imgPos < topOfWindow + 650){
                $(this).addClass("animate__slideInUp");
            }
        });
    });
});


$(function(){
    $(window).scroll(function(){
        $('#sec1 .skill').each(function(){
            var imgPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if(imgPos < topOfWindow + 650){
                $(this).addClass("animate__slideInUp");
            }
        });
    });
});

//for section 2
var btn3 = document.getElementById('sec2_btn');
  btn3.onclick = function () {
        alert('Заполните форму и Ждите дальнейшего звонка! :)');
    };


// var btn = document.getElementById('btn');
//  btn.onclick = function () {
//     alert('Click');
//  };