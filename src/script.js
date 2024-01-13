const basePath = `file:///home/mike/Documents/Comp_web_design/Blog_assignment_1/`;

const buildFullPath = (fileName) => `${basePath}${fileName}`;

function checkPasswordForDrugs(){
    const fullPath = buildFullPath(`blog_Jan_Second.html`);
    console.log(fullPath);
    //window.location.href = fullPath;
}