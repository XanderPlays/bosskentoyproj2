document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('bookingForm');
    const destination = document.getElementById('destination');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const travelers = document.getElementById('travelers');

    const destinationError = document.getElementById('destinationError');
    const startDateError = document.getElementById('startDateError');
    const endDateError = document.getElementById('endDateError');
    const travelersError = document.getElementById('travelersError');

    function validateDestination() {
        if (destination.value.trim() === '') {
            destinationError.textContent = 'Destination is required.';
            destination.classList.add('is-invalid');
            return false;
        } else {
            destinationError.textContent = '';
            destination.classList.remove('is-invalid');
            return true;
        }
    }

    function validateStartDate() {
        if (startDate.value === '') {
            startDateError.textContent = 'Start date is required.';
            startDate.classList.add('is-invalid');
            return false;
        } else {
            startDateError.textContent = '';
            startDate.classList.remove('is-invalid');
            return true;
        }
    }

    function validateEndDate() {
        if (endDate.value === '') {
            endDateError.textContent = 'End date is required.';
            endDate.classList.add('is-invalid');
            return false;
        } else if (new Date(endDate.value) <= new Date(startDate.value)) {
            endDateError.textContent = 'End date must be after the start date.';
            endDate.classList.add('is-invalid');
            return false;
        } else {
            endDateError.textContent = '';
            endDate.classList.remove('is-invalid');
            return true;
        }
    }

    function validateTravelers() {
        const numTravelers = parseInt(travelers.value, 10);
        if (isNaN(numTravelers) || numTravelers <= 0) {
            travelersError.textContent = 'Please enter a valid number of travelers.';
            travelers.classList.add('is-invalid');
            return false;
        } else {
            travelersError.textContent = '';
            travelers.classList.remove('is-invalid');
            return true;
        }
    }

    destination.addEventListener('input', validateDestination);
    startDate.addEventListener('input', validateStartDate);
    endDate.addEventListener('input', validateEndDate);
    travelers.addEventListener('input', validateTravelers);

   
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const isDestinationValid = validateDestination();
        const isStartDateValid = validateStartDate();
        const isEndDateValid = validateEndDate();
        const isTravelersValid = validateTravelers();

        if (isDestinationValid && isStartDateValid && isEndDateValid && isTravelersValid) {
            alert('Thank you for the log in Booking confirmed Successful!');
        }
    });
});