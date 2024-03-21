// style setup
new DataTable('#users-table', {
    columnDefs: [
        {
            className: 'dtr-control',
            orderable: false,
            targets: 0
        }
    ],
    order: [1, 'asc'],
    responsive: {
        details: {
            type: 'column'
        }
    },
    responsive: true,
    info: true,
    ordering: true,
    paging: true,
    pagingType: 'simple',
    search: {
        return: true
    },
    lengthMenu: [
        [10, 30, 50, -1],
        [10, 30, 50, 'All']
    ],
    responsive: {
        details: {
            display: DataTable.Responsive.display.modal({
                header: function (row) {
                    var data = row.data();
                    return 'Details for ' + data[0] + ' ' + data[1];
                }
            }),
            renderer: DataTable.Responsive.renderer.tableAll({
                tableClass: 'table'
            })
        }
    },
});
// generate rows
function addNewRow() {
    table.row
        .add([
            '<td></td>',
            'mhklrnc' + counter,
            'Mhike Laurence ' + counter,
            'Admin ' + counter,
            'Password' + counter,
            'chas' + counter,
            'mhklrnc' + counter,
            'Mhike Laurence ' + counter,
            'Admin ' + counter,
            'Password' + counter,
            'chas' + counter,
            'chas' + counter,
            // '<button id="status-active">Active</button> <button id="status-inactive">Inactive</button>',
            '<button id="edit-row" class="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#edit">Edit</button> <button id="delete-row" class="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#delete">Delete</button>',
        ])
        .draw(false);

    counter++;
}

const table = new DataTable('#users-table');
let counter = 1;

for (x = 1; x <= 100; x++) {
    addNewRow();
}
// on hover effects
table.on('mouseenter', 'td', function () {
    let colIdx = table.cell(this).index().column;

    table
        .cells()
        .nodes()
        .each((el) => el.classList.remove('highlight'));

    table
        .column(colIdx)
        .nodes()
        .each((el) => el.classList.add('highlight'));
});