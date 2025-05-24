import Core from "./Core.js";

const UIManager = (() => {
    let button = document.querySelector("#file-manipulation-form button");
    let meme = document.querySelector("#space-tab-conflict-meme-container img")
    
    const handleOperationChange = (selectedElement) => {
        const operation = selectedElement.value;

        if (operation  === Core.operations.spaceToTab){
            button.textContent = "Convert";
            meme.setAttribute("src", "../assets/tab-pro.gif");
            button.setAttribute("name", Core.operations.spaceToTab);
        }
        else if (operation === Core.operations.tabToSpace){
            button.textContent = "Convert";
            meme.setAttribute("src", "../assets/space-pro.gif");
            button.setAttribute("name", Core.operations.tabToSpace);
        }
    }

    return {
        handleOperationChange: handleOperationChange,
    };
})();

export default UIManager;