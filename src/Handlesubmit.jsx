export function Handlesubmit(event) {
        event.preventDefault();

        const area = document.getElementById("area").value;
        const areaValue = document.getElementById("areaValue").value;
        const type = document.getElementById("type").value;
        const result = document.getElementById("result");

        
        if (!area || !areaValue || type === "Select") {
            result.textContent = "Please select valid options and enter area.";
            return;
        }

    
        let profit = 0;
        if (type === "Vertical") {
            profit = areaValue * 10; 
        } else if (type === "Horizontal") {
            profit = areaValue * 7;
        } else if (type === "A-Shape") {
            profit = areaValue * 5;
        } else if (type === "Hydro Harvesters Special") {
            profit = areaValue * 15;
        }
        // Display result
        result.textContent = `Estimated Profit: ₹${profit}`;
    }
