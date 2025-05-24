const FileManipulator = (() => {
    const spaceToTab = (fileInput, spacesPerTab) => {
        const file = fileInput.files[0];
        if (!file){
            alert("no file selected");
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const fileContents = e.target.result;
            const converted = convertSpacesToTabs(fileContents, spacesPerTab);
            downloadFile(converted, file.name);
        };
        reader.readAsText(file);

    }
    const tabToSpace = (fileInput, spacesPerTab) => {
        const file = fileInput.files[0];
        if (!file){
            alert("no file selected");
            return;
        }

        const reader = new FileReader();

        reader.onload = (e) => {
            const fileContents = e.target.result;
            const converted = convertTabsToSpaces(fileContents, spacesPerTab);
            downloadFile(converted, file.name);
        };
        reader.readAsText(file);
    }

    function downloadFile(content, originalName) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `converted_${originalName}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); 
    }

    function convertSpacesToTabs(text, spacesPerTab){
        let result = text.split('\n').map(line => {

            const leadingSpaces = line.match(/^ */gm);
            if (leadingSpaces[0].length < spacesPerTab){
                return line;
            }

            const leadingTabs = Math.floor(leadingSpaces[0].length / spacesPerTab);
            const remainingSpaces = leadingSpaces % spaceToTab;

            let converted = "";
            
            converted = '\t'.repeat(leadingTabs) + ' '.repeat(remainingSpaces);
            converted  += line.slice(leadingSpaces[0].length);
            return converted;
        }).join('\n');

        return result;
    }

    function convertTabsToSpaces(text, spacesPerTab){
        let result = text.split('\n').map(line => {

            const leadingTabs = line.match(/^\t*/gm);
        
            if (leadingTabs[0].length < 0){
                return line;
            }

            const leadingSpaces = Math.floor(leadingTabs[0].length * spacesPerTab);

            let converted = "";
            
            converted = ' '.repeat(leadingSpaces);
            converted  += line.slice(leadingTabs[0].length);
            return converted;
        }).join('\n');

        return result;
    }
    
    return {
        spaceToTab: spaceToTab,
        tabToSpace: tabToSpace,
    };
})()

export default FileManipulator;