let todo = [];
let req = prompt("Enter your task");
while (true) {
    if (req == "quit")
    {
        console.log("quitting the app")
        break;
    }
    if (req == "list")
    {
        console.log("----------------------");
        for (data of todo)
        {
            console.log(data);
        }
        console.log("------------------");
    }
    else if (req == "add")
    {
        let task = prompt("please Enter the task you want to add.")
        todo.push(task);
        console.log("Task added.");
    } 
    else if (req == "delete")
    {
        let idx = prompt("Enter the task index you want to delete.");
        todo.slice(idx, 1);
        console.log("Task Deleted Successfully.");
        }
    req = prompt("Enter your task");
}