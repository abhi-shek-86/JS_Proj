let input = document.getElementById("input");
let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.addEventListener("click", () => {
    let inputValue = document.getElementById("input").value.trim();

    if (inputValue === "") {
        return alert("Please Enter Your Task!");
    }

    let divTag = document.createElement("div");
    divTag.className = "eachTask";

    divTag.innerHTML = `
        <span class="inputEach">${inputValue}</span>
        <button class="editBtn">Edit</button>
        <button class="delBtn">Delete</button>
    `;

    container.append(divTag);
    document.getElementById("input").value = "";

    let delBtn = divTag.querySelector(".delBtn");
    delBtn.addEventListener("click", () => {
        let confirmation = confirm("Are You Sure?");
        if (confirmation) {
            divTag.remove();

            let updatedTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
            updatedTasks = updatedTasks.filter((t) => t !== inputValue);
            localStorage.setItem("allTasks", JSON.stringify(updatedTasks));

            alert("Task is Deleted");
        }
    });

    let editBtn = divTag.querySelector(".editBtn");
    editBtn.addEventListener("click", () => {
        alert("Edit functionality is under process 😄");
    });

    let data = JSON.parse(localStorage.getItem("allTasks")) || [];
    data.push(inputValue);
    localStorage.setItem("allTasks", JSON.stringify(data));
});

window.addEventListener("DOMContentLoaded", () => {
    let allTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
    allTasks.forEach((x) => {
        let divTag = document.createElement("div");
        divTag.className = "eachTask";

        divTag.innerHTML = `
            <span class="inputEach">${x}</span>
            <button class="editBtn">Edit</button>
            <button class="delBtn">Delete</button>
        `;

        container.append(divTag);
        document.getElementById("input").value = "";

        let delBtn = divTag.querySelector(".delBtn");
        delBtn.addEventListener("click", () => {
            let confirmation = confirm("Are You Sure?");
            if (confirmation) {
                divTag.remove();

                let updatedTasks = JSON.parse(localStorage.getItem("allTasks")) || [];
                updatedTasks = updatedTasks.filter((t) => t !== x);
                localStorage.setItem("allTasks", JSON.stringify(updatedTasks));

                alert("Task is Deleted");
            }
        });

        let editBtn = divTag.querySelector(".editBtn");
        editBtn.addEventListener("click", () => {
            alert("Edit functionality is under process 😄");
        });
    });
});
