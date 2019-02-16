main = (email) => {
    if (/\S+@\S+\.\S+/.test(email) == true ) {
        console.log("Berisi alamat surel");
        console.log(email.match(/\S+@\S+\.\S+/img).toString());
    }else{
        console.log("Tidak berisi alamat surel");
    }
}

main('ini email saya dashgdy27t4@gmail.com atau ysa5de2g@gmail.com');