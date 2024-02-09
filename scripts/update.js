// get the id from the local storage 
// get data based on id extracted from the storage. GET method.
// display the data to the user 
// user makes changes 
// update button 
// the values are posted to the server and saved with the same id 
// the previous data must be deleted 
// new data must be displayed 
// the id should be deleted from the local storage 

window.onload = function() {
    const queryID = localStorage.getItem('updateID');
    console.log(queryID);
    $.ajax({
        url: 'http://localhost:3000/users/' + queryID, 
        type: 'GET',
        success: function(data) {
            console.log("got info");
            console.log(data);
            let prevname = data.name;
            let prevgender = data.gender;
            let prevsalary = data.salary;
            let prevnote = data.notes;
            console.log(prevname);
            console.log(prevgender);
            console.log(prevsalary);
            console.log(prevnote);
            console.log(data.departments);
            console.log(data);


            malecheck="false";
            femalecheck="false";
            if(prevgender=="male"){
                malecheck="true";
                console.log("male",malecheck);
                console.log('demale',femalecheck);
            }

            else{
                femalecheck="true";
                console.Log("female",femalecheck);
                console.log('male',malecheck);
            }
            console.log("male",malecheck);
            console.log('demale',femalecheck);
            //departments 
            HRcheck ="false";
            Salescheck = "false";
            Fincheck = "false";
            Engcheck= "false";
            othercheck= "false";

           // for(i=0;i<departments.length();i++){
             //   if(departments[i]=="")
            //}
           
            const updatedHtml = `
                <form class="container-inner">
                    <div class="labels">
                        <label for="name">Name</label>
                        <label>Profile Image</label>
                        <label>Gender</label>
                        <label>Department</label>
                        <label>Salary</label>
                        <label>Start Date</label>
                        <label>Notes</label>
                    </div>
                    <div class="fields">
                        <input type="text" id="name" class="namebar" placeholder="${data.name}">
                        <div class="profile-pic">
                            <label>
                                <input type="radio" name="profilePic" value="black.jpeg">
                                <img src="../assests/black.jpeg" alt="Black" class="circular-image">
                            </label>
                            <label>
                                <input type="radio" name="profilePic" value="hic.jpeg">
                                <img src="../assests/hic.jpeg" alt="Hic" class="circular-image">
                            </label>
                            <label>
                                <input type="radio" name="profilePic" value="images.jpeg">
                                <img src="../assests/images.jpeg" alt="Images" class="circular-image">
                            </label>
                            <label>
                                <input type="radio" name="profilePic" value="Unknown.jpeg">
                                <img src="../assests/Unknown.jpeg" alt="Unknown" class="circular-image">
                            </label>
                        </div>
                        
                        <div class="gender-inputs">
                            <div class="male">
                                <input type="radio" id="maleRadio" name="gender" value="male" checked=${malecheck}> Male
                            </div>
                            <div class="female">
                                <input type="radio" id="femaleRadio" name="gender" value="female" checked="${femalecheck}"> Female
                            </div>
                        </div>
                        <div class="depart">
                            <input type="checkbox" id="HR" name="depart" value="HR"><label for="HR">HR</label>
                            <input type="checkbox" id="Sales" name="depart" value="Sales" checked="${Salescheck}"><label for="Sales">Sales</label>
                            <input type="checkbox" id="Finance" name="depart" value="Finance" checked="${Fincheck}"><label for="Finance">Finance</label>
                            <input type="checkbox" id="Engineer" name="depart" value="Engineer" checked="${Engcheck}"><label for="Engineer">Engineer</label>
                            <input type="checkbox" id="Others" name="depart" value="Others" checked="${othercheck}"><label for="Others">Others</label>
                        </div>
                        <input type="text" id="salary" class="salary" placeholder="${data.salary}">
                        <input type="date" class="date" placeholder="${data.date}">
                        <input type="text" id="notes" class="notes" placeholder="${data.notes}">
                        <div class="lower-buttons">
                            <button type="button" id="subbutton" class="subbutton">update</button>
                            <button type="reset" class="resbutton">Reset</button>
                        </div>
                    </div>
                </form>
            `;
            $('.container-main').append(updatedHtml);


            
        },
        error: function(xhr, status, error) {
            console.error("Error fetching user data:", error);
        }
    });



};