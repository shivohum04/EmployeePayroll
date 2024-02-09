
$(document).ready(function() {
    
    $('#subbutton').on('click', function() {

    let user_name = $(".namebar").val();
    let selectedProfilePic = $("input[name='profilePic']:checked");
    let salary = jQuery(".salary").val();
    let note = $(".notes").val();
    let date = $(".date").val();

    let gender = $("#maleRadio").is(":checked") ? "male" : "female";

    let departments = $('input[name="depart"]:checked').map(function() {
        return this.value;
    }).get();

    let userObject = {
        name: user_name,
        profilePic: selectedProfilePic,
        gender: gender,
        departments: departments,
        date: date,
        salary: salary,
        notes: note
    };

    console.log(userObject);

    $.ajax({
        url: 'http://localhost:3000/users',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(userObject),
        success: function(userObject) {

            console.log("successfully added");
            

        },
        error: function(xhr, status, error) {

            console.error(error);
        }
    });
    // update user code (saving id in local)
    // check if id in local 
    // hide submit button 
    // update button
    // data get based on id
    // show values on form 
    // change 
    // delete id from local storage 
});
});
