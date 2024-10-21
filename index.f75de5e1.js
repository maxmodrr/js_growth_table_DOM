"use strict";
// write code here
const table = document.querySelector("tbody");
const buttonAddRow = document.querySelector(".append-row.button");
const buttonAddColumn = document.querySelector(".append-column.button");
const buttonRemoveColumn = document.querySelector(".remove-column.button");
const buttonRemoveRow = document.querySelector(".remove-row.button");
document.addEventListener("click", ()=>{
    const columns = document.querySelector("tr").children.length;
    const rows = document.querySelectorAll("tr").length;
    if (columns === 10) buttonAddColumn.setAttribute("disabled", "disabled");
    else buttonAddColumn.removeAttribute("disabled");
    if (columns === 2) buttonRemoveColumn.setAttribute("disabled", "disabled");
    else buttonRemoveColumn.removeAttribute("disabled");
    if (rows === 10) buttonAddRow.setAttribute("disabled", "disabled");
    else buttonAddRow.removeAttribute("disabled");
    if (rows === 2) buttonRemoveRow.setAttribute("disabled", "disabled");
    else buttonRemoveRow.removeAttribute("disabled");
});
buttonAddRow.addEventListener("click", ()=>{
    const newRow = document.createElement("tr");
    const rowCount = document.querySelector("tr").children.length;
    for(let i = 0; i < rowCount; i++){
        const column = document.createElement("td");
        newRow.append(column);
    }
    table.append(newRow);
});
buttonAddColumn.addEventListener("click", ()=>{
    const tr = document.querySelectorAll("tr");
    tr.forEach((elem)=>{
        const newColumn = document.createElement("td");
        elem.append(newColumn);
    });
});
buttonRemoveColumn.addEventListener("click", ()=>{
    const columns = [
        ...document.querySelectorAll("tr")
    ];
    columns.forEach((elem)=>{
        elem.removeChild(elem.lastElementChild);
    });
});
buttonRemoveRow.addEventListener("click", ()=>{
    table.removeChild(table.lastElementChild);
});

//# sourceMappingURL=index.f75de5e1.js.map
