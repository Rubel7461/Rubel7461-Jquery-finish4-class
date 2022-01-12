(function($){
    $(document).ready(function(){
        $('.keyup button').click(function(){
            let value = $('.keyup .key input').val();
            $('.keyup img').show();
            let clr = setInterval(function(){
                $('.keyup img').hide();
                if(value > 0 && value <= 32 ){
                $('.keyup p').html("You are fail");
            }else if(value >=33 && value <= 40){
                $('.keyup p').html("You got D Grade");
            }else if(value >=41 && value <= 50){
                $('.keyup p').html("You got C Grade");
            }else if(value >=51 && value <= 59){
                $('.keyup p').html("You got B Grade");
            }else if(value >=61 && value <= 69){
                $('.keyup p').html("You got A- Grade");
            }else if(value >=70 && value <= 79){
                $('.keyup p').html("You got A  Grade");
            }else if(value >=80 && value <= 100){
                $('.keyup p').html("You got A+ Grade");
            };
            clearInterval(clr);
        
            let clr2= setInterval(function(){
                $('.keyup p').html('');
                clearInterval(clr2);
            },3000);
        
        
            },1000);
        });
        
        $('.show label').click(function(){
            let check=$('.show input[type="checkbox"]').val();
    
    
            if(check == 'show'){
                $('.show input[type="password"]').attr('type','text');
                $('.show input[type="checkbox"]').val('hide');
                
    
            }else if(check == 'hide'){
                $('.show input[type="text"]').attr('type','password');
                $('.show input[type="checkbox"]').val('show');
            };
        });
        $('input').blur(function(){
            let blurevent = $(this).val();

            if(blurevent == ''){
                $(this).css('border','2px solid red');
                $('.nice').show();
            }else{
                $(this).css('border-color','Green');
                $('.nice').hide();
            };
        });
    });
    
    
})(jQuery)