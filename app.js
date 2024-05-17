// alert("This is just a game for fun");

 function getMatch(match){
     return{
         0 : 'are Self Lovers',
         1 : 'are best Friends',
         2 : 'are Lovers',
         3 : 'are Enemies',
         4 : 'will get Marry',
         5 : 'have Affection for each other',
         6 : 'are Friends',
         7 : 'are secret lover'
     }[match]
 }

var arr=[];
var randomTime=Math.floor(Math.random()*(3000-1000 + 1)+1000);
const inputs=document.querySelectorAll('.inputBox input');
const checkMatchBtn=document.getElementById('checkMatchBtn');
const tryAgainBtn=document.getElementById('tryAgainBtn');
// tryAgainBtn.style.display='none';
const matchResultBox=document.querySelector('.matchResultBox');

checkMatchBtn.addEventListener('click',(e)=>{
    
    //To get Names
    var userName=document.getElementById('userName').value;
    var FrdName=document.getElementById('FrdName').value;
    
    //TO Validate Names
    if(userName.length < 3 || FrdName.length < 3)
    {
        matchResultBox.innerHTML='Name must be greater than 2 characters';
        matchResultBox.classList.add('visible');
        return;
    }
    //To get Both Names
    var bothNames = userName+FrdName;
    
    //To check repeated characters
    const nameArray = [...bothNames].sort();
    const repeatedChars = [];
    
    for(let i=0; i<nameArray.length-1;i++){
        if(nameArray[i]===nameArray[i+1]) repeatedChars.push(nameArray[i]);        
    }

    //To get repeated characters array
    const repeatedCharsArray = [...new Set(repeatedChars)];
    // console.log(repeatedCharsArray); //It will display repeated chars
    
    //To get empty name array
    arr=[];

    //To get all characters of both names
    for(let i=0;i<bothNames.length;i++){
        arr.push(bothNames.charAt(i));

        // To remove repeated characters
        for(let j=0;j<repeatedCharsArray.length;j++){
            arr=arr.filter(e=>e!==repeatedCharsArray[j]);
        }
    }
    console.log(arr.length); //It will remove repeated chars and display others

    //To get Array values after removing repeated characters
    var finalName=arr.join('').toString(); // It will convert array to string
    //To get name length which is important for our project
    var finalNameLength=arr.join('').toString().length;
    // console.log('Final Name : '+finalName);
    // console.log('Final Name length : '+finalNameLength);

    // console.log(finalNameLength);
    //To print match on finalname length
    if(finalNameLength > 7){

        var remaininglength = finalNameLength-7;
        setTimeout(function(){
            checkMatchBtn.querySelector('span').style.display='block';
            matchResultBox.innerHTML=userName + ' and ' + FrdName + ' ' + getMatch(remaininglength);
            matchResultBox.classList.add('visible');
                     //To show try again btn
         tryAgainBtn.style.display='block';
         //To hide match btn
         checkMatchBtn.style.display='none';
        },randomTime)

    }
    else{

        setTimeout(function(){
            checkMatchBtn.querySelector('span').style.display='block';
            matchResultBox.innerHTML=userName + ' and ' + FrdName + ' ' + getMatch(finalNameLength);
            matchResultBox.classList.add('visible');
                     //To show try again btn
         tryAgainBtn.style.display='block';
         //To hide match btn
         checkMatchBtn.style.display='none';
        },randomTime) //create random time btn 2s to 5s
    }
})

tryAgainBtn.addEventListener('click',(e1)=>{
    location.reload();
} )
