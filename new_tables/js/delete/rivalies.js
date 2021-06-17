
$(document).ready(function() {
    $('#example').DataTable( {
        data: dataSet,
        ajax: "dataRivalie.js"
        columns: [
            { title: "Opponent" },
            { title: "Best Rank" },
            { title: "Matches" },
            { title: "Won" },
            { title: "Lost" },
            { title: "Last Match" }
        ],
        dom: 'Bfrtip',
        stateSave: true,
        buttons: [
            'colvis'
        ],
        scrollY:        400,
        scrollX:        200,
        scrollCollapse: true,
        scroller:       true
    } );
} );

