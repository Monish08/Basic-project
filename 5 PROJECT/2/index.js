
function check() {
    const inputElement = document.getElementsByTagName("input")[0];
    let inputstr=inputElement.value;
    
    inputstr=inputstr.toLowerCase();
    let start=0;
    let end=(inputstr.length)-1;
    let flag=true;
    while(start<end)
    {
        if(inputstr[start]!=inputstr[end])
        {
            flag=false;
        }
        start++;
        end--;
    }
    if(flag)
    {
        alert('it is a Palindrome!');
    }
    else{
        alert('Not a Palindrome!');
    }
   inputElement.value='';
}