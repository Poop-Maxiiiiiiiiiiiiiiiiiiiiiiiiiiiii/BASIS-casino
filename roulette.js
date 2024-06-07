// Get the wheel and spin button elements from the DOM
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-button");

// Object that stores values of minimum and maximum angle for a value
const rotationValues = 
[
    { minDegree: 0, maxDegree: 60, value: 'nothing' },
    { minDegree: 61, maxDegree: 120, value: "1 candy" },
    { minDegree: 121, maxDegree: 180, value: "2 candy" },
    { minDegree: 181, maxDegree: 240, value: "1 dbuck" },
    { minDegree: 241, maxDegree: 300, value: "10 dbuck" },
    { minDegree: 301, maxDegree: 360, value: "again" },
];

// Size of each piece (all pieces are of equal size)
const data = [1, 1, 1, 1, 1, 1];

// Background color for each piece
let pieColors = 
[
    "#325AE4", // Dark blue
    "#3F6DF0", // Lighter blue
    "#325AE4", // Dark blue
    "#3F6DF0", // Lighter blue
    "#325AE4", // Dark blue
    "#3F6DF0"  // Lighter blue
];

// Create the chart
let myChart = new Chart(wheel, 
{
    // Plugin for displaying text on pie chart
    plugins: [ChartDataLabels],
    // Chart Type: Pie
    type: 'pie',
    data: 
    {
	// Labels (values which are to be displayed on chart)
	labels: ['nothing', "1 candy", "2 candy", "AGAIN", "STILL AGAIN" ],
	// Settings for dataset/pie
	datasets: 
	[
	    {
		backgroundColor: pieColors,
		data: data
	    }
	]
    },
    options: 
    {
	// Responsive chart
	responsive: true,
	animation: { duration: 0 },
	plugins: 
	{
	    // Hide tooltip and legend
	    tooltip: false,
	    legend: { display: false },
	    // Display labels inside pie chart
	    datalabels: 
	    {
		color: '#ffffff',
		formatter: function (_, context)
		{
		    return context.chart.data.labels[context.dataIndex];
		},
		font: { size: 24 }
	    }
	}
    }
});

// Display value based on the randomAngle
function valueGenerator(angleValue)
{
    for (let i = 0; i < rotationValues.length; i++)
    {
	// If the angleValue is between min and max, then display it
	if (angleValue >= rotationValues[i].minDegree && angleValue <= rotationValues[i].maxDegree)
	{
	    spinBtn.disabled = false;
	    break;//exit loop once the correct range is found
	}
    }
}

// Spinner count
let count = 0;
// 100 rotations for animation and last rotation for result
let resultValue = 101;

// Start spinning when the button is clicked
spinBtn.addEventListener("click", function ()
{
    spinBtn.disabled = true;

    // Generate random degrees to stop at
    let randomDegree = Math.floor(Math.random() * 356);//360 will be the same as zero, so use 355 to give some padding, math.floor will round 356 down

    // Interval for rotation animation
    let rotationInterval = window.setInterval(function ()
    {
	// Set rotation for pie chart
	/*
	Initially, to make the pie chart rotate faster, we set resultValue to 101 so it rotates 101 degrees at a time. This reduces by 5 with every count. Eventually, on the last rotation, we rotate by 1 degree at a time.
	*/
	myChart.options.rotation = myChart.options.rotation + resultValue;

	// Update chart with new value
	myChart.update();

	// If rotation > 360, reset it back to 0
	if (myChart.options.rotation >= 360)
	{
	    count += 1;
	    resultValue -= 5;
	    myChart.options.rotation = 0;
	}
	// Check if the rotation is within a reasonable range and matches the randomDegree
	else if (count > 15 && myChart.options.rotation == randomDegree)
	{
	    valueGenerator(randomDegree);
	    clearInterval(rotationInterval);
	    count = 0;
	    resultValue = 101;
	}
    }, 10); // Interval set to 10 milliseconds for smooth animation
});
