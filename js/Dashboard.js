// Font Chart
new Chart(document.getElementById('font-chart'), {
    type: 'doughnut',
    data: {
        // labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 40],
                backgroundColor: [getComputedStyle(document.documentElement)
                    .getPropertyValue('--secondary-color'), getComputedStyle(document.documentElement)
                        .getPropertyValue('--quinary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--quarternary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--tertiary-color')],
                hoverOffset: 100,
                borderWidth: 3,
                borderColor: "Transparent",
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: getComputedStyle(document.documentElement)
                        .getPropertyValue('--primary-color'),
                },
            },
        },
    },
});

// Layout Chart
new Chart(document.getElementById('layout-chart'), {
    type: 'doughnut',
    data: {
        // labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 40],
                backgroundColor: [getComputedStyle(document.documentElement)
                    .getPropertyValue('--secondary-color'), getComputedStyle(document.documentElement)
                        .getPropertyValue('--quinary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--quarternary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--tertiary-color')],
                hoverOffset: 100,
                borderWidth: 3,
                borderColor: "Transparent",
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: getComputedStyle(document.documentElement)
                        .getPropertyValue('--primary-color'),
                },
            },
        },
    },
});

// Page Chart
new Chart(document.getElementById('page-chart'), {
    type: 'doughnut',
    data: {
        // labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 40],
                backgroundColor: [getComputedStyle(document.documentElement)
                    .getPropertyValue('--secondary-color'), getComputedStyle(document.documentElement)
                        .getPropertyValue('--quinary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--quarternary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--tertiary-color')],
                hoverOffset: 100,
                borderWidth: 3,
                borderColor: "Transparent",
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: getComputedStyle(document.documentElement)
                        .getPropertyValue('--primary-color'),
                },
            },
        },
    },
});

// Overall Chart
new Chart(document.getElementById('overall-chart'), {
    type: 'doughnut',
    data: {
        // labels: ['A', 'B', 'C', 'D'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 40],
                backgroundColor: [getComputedStyle(document.documentElement)
                    .getPropertyValue('--secondary-color'), getComputedStyle(document.documentElement)
                        .getPropertyValue('--quinary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--quarternary-color'),getComputedStyle(document.documentElement)
                        .getPropertyValue('--tertiary-color')],
                hoverOffset: 100,
                borderWidth: 3,
                borderColor: "Transparent",
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: getComputedStyle(document.documentElement)
                        .getPropertyValue('--septenary-color'),
                },
            },
        },
    },
});