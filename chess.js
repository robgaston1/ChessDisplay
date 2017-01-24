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
        if ((Math.ceil(i/8)) % 2 == 1) {
            if (i % 2 == 0) {
                $('#board').append('<div class="square wht"><div>');
            } else {
                $('#board').append('<div class="square blk"><div>');
            }
        } else {
            if (i % 2 == 0) {
                $('#board').append('<div class="square blk"><div>');
            } else {
                $('#board').append('<div class="square wht"><div>');
            }
        }
    }
    $('#pieces').html('<p>'+pieces.blKnight+'</p>');
});