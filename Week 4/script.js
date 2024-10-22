const hamburgerMenu = document.querySelector("#hamburger-menu");
const stickyNav = document.querySelector("#sticky-nav");

hamburgerMenu.addEventListener("click", () =>{
    stickyNav.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})


/* For Prescription APIs */

/* For Medicine Class */
const medicineClass = document.querySelector("#medicineClassDropdown");

medicineClass.addEventListener("click", 
    
    () => {
        console.log("medicineClass clicked");
        fetch("https://cliniqueplushealthcare.com.ng/prescriptions/drug_class")
        .then(response => response.json())
        .then(data => {
            medicineClass.innerHTML = "";
            data.forEach(item => {

                const option = document.createElement("option");
                option.value = item.id;
                option.textContent = item.name;

                medicineClass.appendChild(option);

                }
            )
        })
        .catch(error => console.error('Error fetching medicine classes:', error));
       
    }
)


/* Medicine Name */
const medicineName = document.querySelector("#medicineNameDropdown");

medicineClass.addEventListener("change",

    () => {
        const selectedClassId = medicineClass.value;
        console.log(selectedClassId);
    
        fetch(`https://cliniqueplushealthcare.com.ng/prescriptions/get_drug_class_by_id/${selectedClassId}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
    
            medicineName.innerHTML = "";
    
            data.forEach(item => {

                console.log(item);
                const option = document.createElement("option");
                option.value = item.medicine_id;
                option.textContent = item.medicine_name;

                option.onclick = () => addMedicine(medicine);
                medicineName.appendChild(option); 

            });
        })
        .catch(error => console.error('Error fetching medicine names:', error));
    }
)

/*Add To Table*/
function addMedicine(medicine) {

    const prescriptionTable = document.getElementById("table1");
    const row = prescriptionTable.insertRow();
    const cell = row.insertCell();

    cell.textContent = medicine.name;
}

function fetchAllMedicines() {
    fetch("https://cliniqueplushealthcare.com.ng/prescriptions/all_medicine")
        .then(response => response.json())
        .then(medicines => {
            
        })
        .catch(error => console.error('Error fetching all medicines:', error));
}