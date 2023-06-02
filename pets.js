// bring over fs
// read file pets.json
// do something with the data
// bring over readline
// throw Error to use stderror
console.log(process.argv)
var fs = require('fs');
function commmand(process)
{
    if(process.argv[2] === "create")
    {
       create(process.argv[3],process.argv[4],process.argv[5])
    }
    else if(process.argv[2] === "read")
    {
        read(process.argv[3])
    }
    else if(process.argv[2] === "update")
    {

    }
    else if(process.argv[2] === "destroy")
    {

    }
    else
    {
        console.log(process.argv.length, "pets.js create | read | update | destroy")
    }
}

var input = process

commmand(input)

function read(index){
    fs.readFile("pets.json", "utf8", function(error, d) {
        var data = JSON.parse(d)
        if (error) {
            console.log(error)
        } else if (index === undefined) {
            console.log(data)
            return data
        } else {
            if(index >= 0 && index < data.length)
            {

                console.log(data[index])
                return data[index]
            }
            else
            {
                console.log("Invalid Index \npets.js read indexValue")
            }
        }

        })
    }   
    function create(age, kind, name)
    {
        if(age != undefined && kind != undefined && name != undefined)
        {
        fs.readFile("pets.json", "utf8", function(error, d) {
        var old = JSON.parse(d)
        var data = {
                "age" : parseInt(age),
                "kind" : kind,
                "name" : name
        }
    
        console.log(old.push(data), JSON.stringify(data))
        fs.writeFile("pets.json", JSON.stringify(old), "utf8", function(error, d) {
            
            if (error)
            {
                console.log(error)
            }
            else
            {
                console.log(d)
            }
        
        })
    })
}
else{
    console.log("Invalid arguments\n pets.js create age type name" )
}
    }
    