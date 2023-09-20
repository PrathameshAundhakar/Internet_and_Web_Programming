$(document).ready(function(){
    $("button").click(function(){
        const search = document.getElementById("search").value;
        $("#towns li").each((index,item) => {
            if (item.textContent.includes(search)) {
                $(item).css("font-weight", "bold");
            } 
            if(!item.textContent.includes(search)){
                $(item).css("font-weight", "");
                document.getElementById("div").textContent = `${search} not found.`;
            }
            else
                $(item).css("font-weight", "");
        });
    });

})