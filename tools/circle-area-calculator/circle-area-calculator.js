document.getElementById('circleForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const diameterInput = document.getElementById('diameter').value.trim();
    const diameter = parseFloat(diameterInput);

    // Validate input: Ensure it's a positive number
    if (isNaN(diameter) || diameter <= 0) {
        document.getElementById('result').innerHTML = "<p>Please enter a valid positive number for the diameter.</p>";
        return;
    }

    // Perform the calculation for the area
    const radius = diameter / 2;
    const area = Math.PI * Math.pow(radius, 2);

    let areaFormatted;

    // Use scientific notation (10^x) for small numbers
    if (area < 0.001) {
        const exponent = Math.floor(Math.log10(area));
        const mantissa = (area / Math.pow(10, exponent)).toFixed(5);
        areaFormatted = `${mantissa} × 10<sup>${exponent}</sup>`; // Format in 10^x notation
    } else {
        areaFormatted = area.toFixed(5); // Display up to 5 decimals for larger numbers
    }

    document.getElementById('result').innerHTML = `<p>The area of the circle is:<br><strong style="color: #F86709;">${areaFormatted} m²</strong></p>`;
});