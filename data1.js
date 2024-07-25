const fs = require("fs")

//////// add Person data to file
const addPerson = (id, fname, lname, city, age) => {
    const allData = loadInfo()

    const duplicatedData = allData.filter((obj) => {
        return obj.id === id
    })

    if (duplicatedData.length == 0) {
        allData.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,
            age: age,
        })

        saveAllData(allData)
        console.log("Item Added Successfully")
    } else {
        console.log("Error : Duplicated Data")
    }
}

//////// delete data by id
const deletePerson = (id) => {
    const allData = loadInfo()
    const dataToSave = allData.filter((obj) => {
        return obj.id !== id
    })

    if (allData.length > dataToSave.length) {
        saveAllData(dataToSave)
        console.log("Item Deleted Successfully")
    }
    else {
        console.log("No Item Deleted ....")
    }

}

//////// update Person data to file
const updatePerson = (id, fname, lname, city, age) => {
    const allData = loadInfo()

    const itemToUpdate = allData.filter((obj) => {
        return obj.id === id
    })

    if (itemToUpdate.length > 0) {
        const dataToSave = allData.filter((obj) => {
            return obj.id !== id
        })

        ///// check for the data to update
        fname == null ? fname = itemToUpdate[0].fname : ""
        lname == null ? lname = itemToUpdate[0].lname : ""
        city == null ? city = itemToUpdate[0].city : ""
        age == null ? age = itemToUpdate[0].age : ""

        dataToSave.push({
            id: id,
            fname: fname,
            lname: lname,
            city: city,
            age: age,
        })

        saveAllData(dataToSave)
        console.log("Item Updated Successfully")
    } else {
        console.log("Error : No Item to update")
    }
}

//////// read data by id
const readPersonData = (id) => {
    const allData = loadInfo()
    const itemNeeded = allData.find((obj) => {
        return obj.id == id
    })

    if (itemNeeded) {
        console.log(itemNeeded)
    }
    else {
        console.log("ID needed not found ....")
    }

}

//////// list data by id
const listPersonData = () => {
    const allData = loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname, obj.city)
    });
}



//////// load data from file
const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data1.json").toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }

}


/////// save data to file
const saveAllData = (allData) => {
    const allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data1.json", allDataJson)
}

module.exports = {
    addPerson,
    deletePerson,
    updatePerson,
    readPersonData,
    listPersonData,
}