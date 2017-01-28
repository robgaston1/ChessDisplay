$(document).ready(function() {
    
    /*var pieces = {
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
    };*/
    
    var pieces = [
        {   name: 'blPawn',
            code: "&#9823",
            start: ['#g1', '#g2', '#g3', '#g4', '#g5', '#g6', '#g7', '#g8'],
        },
    
        {   name: 'blKnight',
            code: "&#9822;",
            start: ['#h2', '#h7'],
        },
        
        {   name: 'blBishop',
            code: "&#9821",
            start: ['#h3', '#h6'],
        },
        
        {   name: 'blRook',
            code: "&#9820;",
            start: ['#h1', '#h8']
        },
        
        {   name: 'whPawn',
            code: "&#9817",
            start: ['#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7', '#b8'],
        },
        
        {   name: 'blQueen',
            code: "&#9813;",
            start: ['#h4'],
        },
        
        {   name: 'blKing',
            code: "&#9812;",
            start: ['#h5']
        },
    ];
                  
    function createIdNum(i){
         if (i < 8){
                return i;
            } else if (i % 8 == 0){
                return 8;
            } else {
                return (i % 8);
            }
    }

    function createIdLet(i){
        var row = Math.ceil(i/8);
            switch(row){
                case 1:
                    return "h";
                case 2:
                    return "g";
                case 3:
                    return "f";
                case 4:
                    return "e";
                case 5:
                    return "d";
                case 6:
                    return "c";
                case 7:
                    return "b";
                case 8:
                    return   "a";
            }
            
    }
    
    function createId(i) {
            var numId = createIdNum(i);
            var letterId = createIdLet(i);
            return letterId + numId;
    }
    
    function generateBoard() { 
        console.log()
        for (var i=1; i<=64; i++) {
            var grid = createId(i);
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
    }

    function placePiece (obj) {
        for (var j = 0; j < obj.start.length; j++) {
            $(obj.start[j]).html(obj.code);
        }
    }
    generateBoard();
    for (var k=0; k < pieces.length; k++){
        placePiece(pieces[k]);
    }
});