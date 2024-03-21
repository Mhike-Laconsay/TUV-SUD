// style setup
new DataTable('#target-sales-table', {
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
});
// generate rows
function addNewRow() {
    table_2.row
        .add([
            '<td></td>',
            'mhklrnc ' + counter_2,
            'North Luzon' + counter_2,
            '₱ 100' + counter_2,
            '€ 200' + counter_2,
            '2024' + counter_2,
            '<button id="edit-row" class="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#edit-email">Edit</button> <button id="delete-row" class="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#delete">Delete</button>',
        ])
        .draw(false);

    counter_2++;
}

const table_2 = new DataTable('#target-sales-table');
let counter_2 = 1;

for (x = 1; x <= 100; x++) {
    addNewRow();
}
// on hover effects
table_2.on('mouseenter', 'td', function () {
    let colIdx = table_2.cell(this).index().column;

    table_2
        .cells()
        .nodes()
        .each((el) => el.classList.remove('highlight'));

    table_2
        .column(colIdx)
        .nodes()
        .each((el) => el.classList.add('highlight'));
});