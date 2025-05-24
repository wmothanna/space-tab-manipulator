import UIManager from "./UIManager.js";
import Core from "./Core.js";
import FileManipulator from "./FileManipulator.js";

document.addEventListener("DOMContentLoaded", () => {
    let select = document.getElementById("operation-select");
    select.value = Core.operations.spaceToTab;

    select.addEventListener("change", (e) => {
        UIManager.handleOperationChange(e.target);
    });


    let form = document.getElementById("file-manipulation-form");
    form.addEventListener("submit", (e) => {
        const operation = e.target["operation"].value;
        e.preventDefault();
        if (operation === Core.operations.spaceToTab){
            FileManipulator.spaceToTab(form["src-file"], form["spaces-per-tab"].value);
        }
        else if (operation === Core.operations.tabToSpace){
            FileManipulator.tabToSpace(form["src-file"], form["spaces-per-tab"].value);
        }
    })
});
