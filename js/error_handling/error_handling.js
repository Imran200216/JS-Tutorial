let a = undefined;

try{

    console.log(a.name);

}catch (e){
    console.log("Error has occured");
} finally {
    console.log("Finally is successfully runned!");
}

