const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// challenge started on Aug 5, 2019 (which is month 7 if Jan is 0)
const startDate = new Date( 2019, 7, 5 );
const currentDate = new Date();

function dateDiffInDays( a, b )
{
    const utc1 = Date.UTC( a.getFullYear(), a.getMonth(), a.getDate() );
    const utc2 = Date.UTC( b.getFullYear(), b.getMonth(), b.getDate() );

    return Math.floor( ( utc2 - utc1 ) / _MS_PER_DAY );
}

// add one because first day was day 1
var challengeDayNumber = dateDiffInDays( startDate, currentDate ) + 1;

var outputContainer = document.querySelector( "#output-container" );
var subtextContainer = document.querySelector( "#subtext" );
var output;

if( challengeDayNumber <= 100 )
{
    output = `Day ${ challengeDayNumber }`;
}
else
{
    output = 'Challenge complete!';
}

outputContainer.innerHTML = output;

// random color when clicking anywhere
function generateRandomInt( lower, upper )
{
    return Math.floor( Math.random() * ( upper - lower + 1 ) ) + lower;
}

function getBWContrastColor( r, g, b )
{
    var color;
    var luminance = ( 0.299 * r + 0.587 * g + 0.114 * b ) /255;
    
    if( luminance > 0.5 )
    {
        color = "black"; // bright colors - black font
    }
    else
    {
        color = "white"; // dark colors - white font
    }
    
    return color;
}

function setBackgroundToRandColor()
{
    var red = generateRandomInt( 0, 255 );
    var green = generateRandomInt( 0, 255 );
    var blue = generateRandomInt( 0, 255 );
    
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    var fontColor = getBWContrastColor( red, green, blue );
    outputContainer.style.color = fontColor;
    subtextContainer.style.color = fontColor;
}

window.onclick = setBackgroundToRandColor;

setBackgroundToRandColor();