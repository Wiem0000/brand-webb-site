var imgs=["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg"]

function randomindex(){
    return Math.floor(Math.random()*imgs.length)
}
setInterval(function() {
  
    $("#body").css({"background-image": "url(" +  imgs[randomindex()] + ")"});  
}, 1000)

$("#btn").on('click',function(event){
var in1 = $('#input1').val()
console.log(in1);
var in2 = $('#input2').val()
var in3 = $('#input3').val()
    event.preventDefault()
    console.log('this',in3);
    $('#display').append(`
        <h2> ${in1}</h2>
        <h2> ${in2}</h2>`)
    $('#display').append(`<div><img id="add" src='${in3}'/></div>`)
})
console.log($(".d"));

$(".d").click(function(){
    console.log($(this).parent);
    
$(this).parent().remove()




})




    