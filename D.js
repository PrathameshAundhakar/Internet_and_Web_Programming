$(document).ready(function () {
    $(document).on("contextmenu", ".click", function (e) {
        console.log('Right Mouse Clicked!');
        return false;
    });

    $(document).on('click', '.click', function () {
        console.log('Left Mouse Clicked!');
    });
});
