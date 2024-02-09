$(document).ready(function() {
    // DISPLAY THE USERS 

        $.ajax({
            url: 'http://localhost:3000/users', 
            type: 'GET',
            success: function(data) {
                console.log("got info");
                console.log(data);
                
                    data.forEach(function(userData) {
                        const userDetailsHtml = `
                            <div class="datalayout">
                                <div class="nametag">
                                    <img class="circular-image" src="../assests/${userData.profilePic}" alt="Profile Picture">
                                    <span>${userData.name}</span>
                                </div>
                                <span>${userData.gender}</span>
                                <div class = "department">
                                    <span>${userData.departments}</span>
                                </div>
                                <span>${userData.salary}</span>
                                <span>${userData.date}</span>
                                <div class = "actions">
                                    <img class = "edit-icon" src="../assests/edit.png" onclick=alt="edit icon" data-id="${userData.id}">
                                    <img class = "delete-icon" src="../assests/delete.png" alt="delete icon" data-id="${userData.id}">
                                </div<
                            </div>
                        `;
    
                        $('.sub-screen').append(userDetailsHtml);
                    });
                
            },
            error: function(xhr, status, error) {
                console.error("Error fetching user data:", error);
            }
        });

        // TO DELETE A SECTION 

        $('.sub-screen').on('click', '.delete-icon', function() {
            var id = $(this).data('id'); 
            console.log('Delete button clicked for ID:', id);
            var commentContainer = $(this).closest('.datalayout'); 
            $.ajax({
                type: "DELETE", 
                url: "http://localhost:3000/users/" + id,
                success: function() {
                    commentContainer.slideUp('fast', function() {
                        $(this).remove();
                    });
                },
                error: function(xhr, status, error) {
                    console.error("Error: ", error);
                    
                }
            });
        });

        // UPDATE A USER
        $('.sub-screen').on('click', '.edit-icon', function() {
            var id = $(this).data('id');
            console.log('Edit button clicked for ID:', id);
            // save the id in local storage. 
            localStorage.setItem('updateID',id);
            alert("saved to local")
            window.location.href="update.html";

        
        });
});