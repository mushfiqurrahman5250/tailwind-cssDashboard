//  Chart bar

const labelsBarChart = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const dataBarChart = {
    labels: labelsBarChart,
    datasets: [{
        label: " dataset",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [15, 10, 5, 55, 20, 30, 45, 65, 35, 25, 70, 68],
    }, ],
};

const configBarChart = {
    type: "bar",
    data: dataBarChart,
    options: {},
};

var chartBar = new Chart(
    document.getElementById("chartBar"),
    configBarChart
);

//  Chart line

const labels = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const data = {
    labels: labels,


    datasets: [{
        label: "View Statement",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(163, 65%, 57%)",
        data: [0, 10, 5, 55, 20, 30, 45, 65, 35, 25, 70, 10],


    }, ],

};

const configLineChart = {
    type: "line",
    data,
    options: {},
};


var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
);

// Chart doughnut
const dataDoughnut = {
    labels: ["Direct", "Affiliate", "Sponsored", "E-mail"],
    datasets: [{
        label: "Dataset",
        data: [250, 300, 150, 200],
        backgroundColor: [
            "rgb(255, 139, 170)",
            "rgb(0, 151, 109)",
            "rgb(71, 76, 178)",
            "rgb(255, 28, 7)",
        ],
        hoverOffset: 4,
    }, ],
};

const configDoughnut = {
    type: "doughnut",
    data: dataDoughnut,
    options: {},
};

var chartBar = new Chart(
    document.getElementById("chartDoughnut"),
    configDoughnut
);

//add navbar  responsive// 

$('.navbar-toggle').on('click', function() {
    $('.mobile-navbar').toggleClass('hidden');
    $('#toggle-icon').toggleClass('fa-times');
});

$(window).click(function() {
    $('.mobile-navbar').addClass('hidden');
    $('#toggle-icon').addClass('fa-bars-staggered');
    $('#toggle-icon').removeClass('fa-times');
});

$('.navbar-toggle').on('click', function(event) {
    event.stopPropagation();
});

$('.mobile-navbar').on('click', function(event) {
    event.stopPropagation();
});