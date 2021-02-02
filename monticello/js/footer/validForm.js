
$('#submitButton').on('click',function(){
  if($('#nameCompany').val().length < 7){
    $('.errorUserName').css({'position':'relative', 'bottom': '30px', 'color': 'red' });
    $('.errorUserName').html('Ведите больше 7 символов');
     return false;
  } 

});
position: relative;
