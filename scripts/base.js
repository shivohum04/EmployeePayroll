function display() {
    let user_name = document.getElementsByClassName("namebar")[0].value;
    let profilePics = document.getElementsByName("profilePic");
    let selectedProfilePic = [...profilePics].find(pic => pic.checked)?.value;
    let salary = document.getElementsByClassName("salary")[0].value;
    let note = document.getElementsByClassName("notes")[0].value;

    let gender = document.getElementById("maleRadio").checked ? "male" : "female";

    let departments = [...document.querySelectorAll('input[name="depart"]:checked')].map(dept => dept.value);

    let userObject = {
        name: user_name,
        profilePic: selectedProfilePic,
        gender: gender,
        departments: departments,
        salary: salary,
        notes: note
    };

    console.log(userObject);
}
