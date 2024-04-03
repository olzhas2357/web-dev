function addList(){
    var input = document.getElementById("nameInput").value;

    var list = document.createElement("ul");
    list.textContent = input;

    var deleteButton = document.createElement("button")
    deleteButton.className="delete-button"
    deleteButton.onclick = function (){
        list.remove();
    };
    list.appendChild(deleteButton)
    document.getElementById("nameList").appendChild(list);
    document.getElementById("nameInput").value = "";

}