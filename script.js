main = (email) => {
    if (/\S+@\S+\.\S+/.test(email) == true ) {
        console.log("Berisi alamat surel");
        console.log(email.substring(0));
    }else{
        console.log("Tidak berisi alamat surel");
    }
}

main('dashgdy27t4@gmail.com');
main('kulineri kuy');
