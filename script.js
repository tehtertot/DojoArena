function setLocation() {
    var location = $(this).data("location");
    $('.container').css('background-image', `url(${location}.jpg)`);
}

function clearLocation() {
    $('.container').css('background', "black");
}

$(document).ready(function(){

    $("li").hover(setLocation);

    $('ul:nth-child(1)').click(function(){
        $('.container').css('background-image', "url(beach.jpg)");
        $('form').show();
        $('#arena').text("Select Players");
        $('.menu').hide();
    });
    $('ul:nth-child(2)').click(function(){
        $('.container').css('background-image', "url(earth.jpg)");
        $('form').show();
        $('#arena').text("Select Players");
        $('.menu').hide();
    });
    $('ul:nth-child(3)').click(function(){
        $('.container').css('background-image', "url(dojo.jpg)");
        $('form').show();
        $('#arena').text("Select Players");
        $('.menu').hide();
    });
    $('ul:nth-child(4)').click(function(){
        $('.container').css('background-image', "url(forest.jpg)");
        $('form').show();
        $('#arena').text("Select Players");
        $('.menu').hide();
    });
    
    $('ul:nth-child(5)').click(function(){
        $('.container').css('background-image', "url(matrix.jpg)");
        $('form').show();
        $('#arena').text("Select Players");
        $('.menu').hide();
    });
    
    $('ul:nth-child(6)').click(function(){
        $('.container').css('background-image', "url(snow.jpg)");
        $('form').show();
        $('#arena').text("Select Players");
        $('.menu').hide();
    });
    
    // $('#lenny').click(function() {
    //     $('.players1 img').attr({
    //         src: "leo.png"});
    //     $('.players1 img').css('display', 'inline-block');
    // });

    // $('#lenny').select(function(){
    //     console.log('hello');
    //     $('#left').css('background-image', "url(leo.jpg)");
    // });

    $( "#player1" ).change(function() {
        var image = $("#player1").val();
        $('.players1').css('background-image', `url(${image})`);
    });
    
    $( "#player2" ).change(function() {
        var newStr = "url('";
        var str = "";
        $( "#player2 option:selected" ).each(function() {
            str += $( this ).text();
            if(str == 'Leonardo'){
                str = 'leo';
            } else if(str == 'Michealangelo'){
                str = 'Mikey';
            } else if(str == 'Rafael'){
                str = 'Rafael';
            } else if(str == 'Donatello'){
                str = 'Donny';
            }
            newStr += str;
            newStr += ".png')";
            // console.log(newStr);
            // console.log(str);
            $('.players2').css('background-image', newStr);
        });
    });
    $('form').hide();
});