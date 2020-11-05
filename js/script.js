var promoCode = '';
var bg1 = './img/15.jpg';
var bg2 = './img/20.jpg';
var bg3 = './img/30.jpg';
var bg4 = './img/freeT.jpg';
var bg5 = './img/sorry.png';

var bgArray= [ bg1, bg2, bg3, bg4, bg5 ],
selectBG = bgArray[Math.floor(Math.random() * bgArray.length)];

switch (selectBG){
    case bg1:
        promoCode = "Scratch15";
        break;
    case bg2:
        promoCode = "Scratch20";
        break;
    case bg3: 
        promoCode = "Scratch30";
        break;
    case bg4: 
        promoCode = "ScratchFreeTee";
        break;
    case bg5: 
        promoCode = "Sorry, not a winner today.";
        break;
}

$('#promo').wScratchPad({
    size        : 70,       
    bg:  selectBG,
    realtime    : true, 
    fg: './img/scratch_to_win.png',
    // fg: './img/overlay.png',
    'cursor': 'url("./img/coin1.png") 5 5, default',

    scratchMove: function (e, percent) {
        if ((percent > 50) && (promoCode != '')) {
          $('.promo-container').show();
          $('body').removeClass('not-selectable');
          $('.promo-code').html('Your code is: ' + promoCode);
        }
      }
 });