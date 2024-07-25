const yargs = require("yargs")
const fs = require("fs")
const data1 = require("./data1.js")

yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        id: {
            describe: "This is the id in add comand",
            demandOption: true,
            type: "int",
        },
        fname: {
            describe: "This is the first name in add comand",
            demandOption: true,
            type: "string",
        },
        lname: {
            describe: "This is the last name in add comand",
            demandOption: true,
            type: "string",
        },
    },
    handler: (x) => {
        data1.addPerson(x.id, x.fname, x.lname, x.city, x.age)
    },
})

yargs.command({
    command: "delete",
    describe: "to delete an item",
    builder: {
        id: {
            describe: "This is the id of item to delete",
            demandOption: true,
            type: "int",
        },
    },
    handler: (x) => {
        data1.deletePerson(x.id)
    },
})

yargs.command({
    command: "update",
    describe: "to update an item",
    builder: {
        id: {
            describe: "This is the id in update comand",
            demandOption: true,
            type: "int",
        },
    },
    handler: (x) => {
        data1.updatePerson(x.id, x.fname, x.lname, x.city, x.age)
    },
})

yargs.command({
    command: "read",
    describe: "to read an item",
    builder: {
        id: {
            describe: "This is the id of item to read",
            demandOption: true,
            type: "int",
        },
    },
    handler: (x) => {
        data1.readPersonData(x.id)
    },
})

yargs.command({
    command: "list",
    describe: "to list data",
    handler: () => {
        data1.listPersonData()
    },
})

yargs.parse()