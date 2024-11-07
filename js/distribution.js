// Initialize Lottie animation
const animationContainer = document.getElementById('lottie-animation');
const animation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "Lottie\AnimationLottie.json" // Path to your Lottie animation JSON    original link 'https://lottie.host/d4f1a528-e176-440f-a942-04664231a3cb/dWlrrOY10J.json'
});


// Define division and district data
const divisions = {
    Dhaka: ["Dhaka", "Narayanganj", "Gazipur"],
    Chattogram: ["Chattogram", "Cox's Bazar", "Cumilla"],
    Khulna: ["Khulna", "Jessore", "Satkhira"]
};

const districtSubDistricts = {
    Dhaka: {
        Dhaka: ["Dhanmondi", "Gulshan", "Banani"],
        Narayanganj: ["Narayanganj Sadar", "Siddhirganj"],
        Gazipur: ["Gazipur Sadar", "Sreepur"],
    },
    Chattogram: {
        Chattogram: ["Panchlaish", "Chandgaon"],
        "Cox's Bazar": ["Cox's Bazar Sadar", "Maheshkhali"],
        Cumilla: ["Cumilla Sadar", "Debidwar"],
    },
    Khulna: {
        Khulna: ["Khulna Sadar", "Dighalia"],
        Jessore: ["Jessore Sadar", "Jhikargachha"],
        Satkhira: ["Satkhira Sadar", "Kolaroa"],
    }
};

// Populate districts based on selected division
document.getElementById('division').addEventListener('change', function () {
    const division = this.value;
    const districtSelect = document.getElementById('district');
    const subDistrictSelect = document.getElementById('sub-district');
    
    // Clear previous options
    districtSelect.innerHTML = '<option value="">Select District</option>';
    subDistrictSelect.innerHTML = '<option value="">Select Sub-District</option>';
    subDistrictSelect.disabled = true;

    if (division) {
        const districts = divisions[division];
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false; // Enable district dropdown
    } else {
        districtSelect.disabled = true; // Disable if no division is selected
    }
});

// Populate sub-districts based on selected district
document.getElementById('district').addEventListener('change', function () {
    const division = document.getElementById('division').value;
    const district = this.value;
    const subDistrictSelect = document.getElementById('sub-district');

    // Clear previous options
    subDistrictSelect.innerHTML = '<option value="">Select Sub-District</option>';

    if (district) {
        const subDistricts = districtSubDistricts[division][district];
        subDistricts.forEach(subDistrict => {
            const option = document.createElement('option');
            option.value = subDistrict;
            option.textContent = subDistrict;
            subDistrictSelect.appendChild(option);
        });
        subDistrictSelect.disabled = false; // Enable sub-district dropdown
    } else {
        subDistrictSelect.disabled = true; // Disable if no district is selected
    }
});

// Handle form submission
document.getElementById('dealer-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const division = document.getElementById('division').value;
    const district = document.getElementById('district').value;
    const subDistrict = document.getElementById('sub-district').value;

    console.log({ name, phone, division, district, subDistrict });
    alert('Form submitted successfully!');

    // Reset form if needed
    this.reset();
});
