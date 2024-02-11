$(document).ready(function() {
    $('.cancel').on('click',function(){
        window.location.href="details.html";
    });

    $('#subbutton').on('click', function() {
        // Check if all the fields are filled
        var inputs = document.querySelectorAll('input');
        var isValid = true;

        inputs.forEach(function(input) {
            if (input.value.trim() === '') {
                isValid = false;
            }
        });

        if (!isValid) {
            alert('Please fill in all fields!');
            return;
        }

        // Regex validation for name
        var nameRegex = /^[a-zA-Z]{3,}\s?[a-zA-Z]*$/; // Allows only letters, at least 3 characters

        var user_name = $(".namebar").val();

        if (!nameRegex.test(user_name)) {
            alert('Please enter a valid name with at least 3 letters.');
            return;
        }

        // Construct user object
        var selectedProfilePic = $("input[name='profilePic']:checked").val();
        var salary = $(".salary").val();
        var note = $(".notes").val();
        var date = $(".date").val();
        var gender = $("#maleRadio").is(":checked") ? "male" : "female";
        var departments = $('input[name="depart"]:checked').map(function() {
            return this.value;
        }).get();

        var userObject = {
            name: user_name,
            profilePic: selectedProfilePic,
            gender: gender,
            departments: departments,
            date: date,
            salary: salary,
            notes: note
        };

        console.log(userObject);

        // Submit data via AJAX
        $.ajax({
            url: 'http://localhost:3000/users',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userObject),
            success: function(userObject) {
                console.log("successfully added");
                console.log(userObject);
                console.log(selectedProfilePic);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });

        // Redirect to details page after submission
        window.location.href = "details.html";
    });
});