$(document).ready(function() {
    
    var pieces = {
        whKing: "&#9812;",
        whQueen: "&#9813;",
        whRook: "&#9814;",
        whBishop: "&#9815;",
        whKnight: "&#9816;",
        whPawn: "&#9817",
        blKing: "&#9818;",
        blQueen: "&#9819;",
        blRook: "&#9820;",
        blBishop: "&#9821;",
        blKnight: "&#9822;",
        blPawn: "&#9823;",
    };
    
    for (var i=1; i<=64; i++) {
        var numId, letterId, grid;
        //generate the 0 through 7 label for the grid ID
        if (i < 8){
            numId = i;
        } else if (i % 8 == 0){
            numId = 8;
        } else {
            numId = (i % 8);
        }
        //create the letter portion of the grid ID
        var row = Math.ceil(i/8);
        switch(row){
            case 1:
                letterId = "h";
                break;
            case 2:
                letterId = "g";
                break;
            case 3:
                letterId = "f";
                break;
            case 4:
                letterId= "e";
                break;
            case 5:
                letterId = "d";
                break;
            case 6:
                letterId = "c";
                break;
            case 7:
                letterId = "b";
                break;
            case 8:
                letterId = "a";
        }
        grid = letterId + numId;
        
        if ((Math.ceil(i/8)) % 2 == 1) {
            if (i % 2 == 0) {
                $('#board').append('<div id='+grid+' class="square blk"><div>');
            } else {
                $('#board').append('<div id='+grid+' class="square wht"><div>');
            }
        } else {
            if (i % 2 == 0) {
                $('#board').append('<div id='+grid+' class="square wht"><div>');
            } else {
                $('#board').append('<div id='+grid+' class="square blk"><div>');
            }
        }
    }
    $('#pieces').html('<p>'+pieces.blKnight+'</p>');
});