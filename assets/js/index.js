
var userinput = prompt("what is your favorite season????? /summers/winters/autoum/spring/cloudy/rainy")
// var userinput =prompt('what is your favorite season?')

if( userinput === 'winters'){ 
    document.write (`
  <div class="card1">
    <div class="card" style="width: 18rem;" >
  <img src="./assets/image/winter 1.gif" class="card-img-top" alt="..." style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title"><i>Winter</i></h5>
    <p class="card-text"><i>Winter is the coldest and darkest season of the year in polar and temperate climates.</i></p>
  </div>
</div>
</div> 
    `)
}



else if( userinput === 'summers'){ 
    document.write (`
<div class="card2">
    <div class="card" style="width: 18rem;" >
  <img src="./assets/image/img 2 summer.gif" class="card-img-top" alt="..." style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title"><i>Summers</i></h5>
    <p class="card-text"><i>Summer is one of the four seasons. It is the hottest season of the year.</i></p>
  </div>
</div>
</div>
    `)
}


else if( userinput === 'autoum'){ 
    document.write (`
 <div class="card3">
    <div class="card" style="width: 18rem;" >
  <img src="./assets/image/autoumn img.gif" class="card-img-top" alt="..." style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title"><i>Autoum</i></h5>
    <p class="card-text"><i>Autumn is the season when the duration of daylight becomes noticeably shorter and the temperature cools considerably.</i></p>
  </div>
</div>
</div>
    `)
}


else if( userinput === 'spring'){ 
    document.write (`
 <div class="card4">
    <div class="card" style="width: 18rem;" >
  <img src="./assets/image/spring img.gif" class="card-img-top" alt="..." style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title"><i>Sring</i></h5>
    <p class="card-text"><i>Spring is the season after winter and before summer.This helps the plant grow and flower bloom.</i></p>
  </div>
</div>
</div>
    `)
}


else if( userinput === 'cloudy'){ 
    document.write (`
 <div class="card5">
    <div class="card" style="width: 18rem;" >
  <img src="./assets/image/cloudy img.gif" class="card-img-top" alt="..." style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title"><i>Cloudy</i></h5>
    <p class="card-text"><i>cloudy season are different from other seasons.in this seasons in every where of the sky there are millions of cloud.</i></p>
  </div>
</div>
</div>
    `)
}


else if( userinput === 'rainy'){ 
    document.write (`
<div class="card6">
    <div class="card" style="width: 18rem;" >
  <img src="./assets/image/rainy img.gif" class="card-img-top" alt="..." style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title"><i>Rainy</i></h5>
    <p class="card-text"><i>It's a season of rejuvenation, bringing life to nature and helping maintain the ecological balance.</i></p>
  </div>
</div>
</div>
    `)
}


else{
    document.write(`
        <div class="card7">
    <div class="cardss" style="width: 18rem;" >
  <img src="./assets/image/smily.gif" class="card-img-top" alt="..." style="height: 250px;">
  <div class="card-body">
    <h5 class="card-title">SORRY!! INVALID ANSWER</h5>
  </div>
</div>
</div>
        
        
        
        `)
}



