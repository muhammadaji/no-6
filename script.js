main = (email) => {
    if (/\S+@\S+\.\S+/.test(email) == true ) {
        console.log("Berisi alamat surel");
        console.log(email.match(/\S+@\S+\.\S+/img).toString());
    }else{
        console.log("Tidak berisi alamat surel");
    }
}

<<<<<<< HEAD
main('ini email saya dashgdy27t4@gmail.com atau ysa5de2g@gmail.com');
=======
main('dashgdy27t4@gmail.com');
main('kulineri kuy');
>>>>>>> c86c1f03efa959e5f984a58ff42353ef0386c6d4
