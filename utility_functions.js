function stringToList(text)
{
    let result = "";

    text.split("\n").forEach((item) => {

        result += "[*]" + item + "\n";
        
    });

    return result;
}