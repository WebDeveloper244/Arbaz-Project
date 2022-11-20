const dotenv = require('dotenv');

let MyEnviorment={};
if(process.env.NODE_ENV === 'testing'){
    MyEnviorment = dotenv.config({path:`${__dirname}/../Application_confirgration-Test.env`});
}

if(process.env.NODE_ENV === 'development'){
     MyEnviorment = dotenv.config({path:`${__dirname}/../Application_confirgration_dev.env`});
}

if(process.env.NODE_ENV === 'production'){
     MyEnviorment = dotenv.config({path:`${__dirname}/../Application_confirgration_Prod.env`})

}
console.log(MyEnviorment)