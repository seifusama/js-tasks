function magic(s) {
    let str = "";
    let ret='';
    //all vowels uppercased, reversed, first letter removed
    for (let i = s.length-1;i>=0;i--)
    {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" ||s[i] == "o" || s[i] == "u")
        {
            str += s[i].toUpperCase();
        }
        else if(i == 0) {
            continue;
        }
        else str += s[i];
    }
    //add hyphens
    for (let i = 0;i<str.length;i++)
    {
        if (i!=str.length-1)
        {
        ret = ret + str[i]+'-';
        }
        else ret = ret + str[i];
    }
    return ret;
  };
  
  console.log(magic('hellothere')); // E-r-E-h-t-O-l-l-E