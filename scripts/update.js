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
            let departments=data.departments;
            console.log(prevname);
            console.log(prevgender);
            console.log(prevsalary);
            console.log(prevnote);
            console.log(data.departments);
            console.log(data);
            malecheck="";
            femalecheck="";

            if(prevgender=="male"){
                malecheck="checked";
            }

            else{
                femalecheck="checked";
            }
         
            //departments 
            HRcheck ="";
            Salescheck = "";
            Fincheck = "";
            Engcheck= "";
            othercheck= "";


           for(i=0;i<departments.length;i++){
            if(departments[i]=="HR"){
                HRcheck="checked";
            }
            else if(departments[i]=="Sales"){
                Salescheck="checked";
            }
            else if(departments[i]=="Finance"){
                Fincheck="checked";
            }
            else if(departments[i]=="Engineer"){
                Engcheck="checked";
            }
            else if(departments[i]=="Others"){
                othercheck="checked";
            }

           }
           
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
                                <input type="radio" id="maleRadio" name="gender" value="male" ${malecheck}> Male
                            </div>
                            <div class="female">
                                <input type="radio" id="femaleRadio" name="gender" value="female" ${femalecheck}> Female
                            </div>
                        </div>
                        <div class="depart">
                            <input type="checkbox" id="HR" name="depart" value="HR" ${HRcheck}><label for="HR">HR</label>
                            <input type="checkbox" id="Sales" name="depart" value="Sales"${Salescheck}><label for="Sales">Sales</label>
                            <input type="checkbox" id="Finance" name="depart" value="Finance"${Fincheck}><label for="Finance">Finance</label>
                            <input type="checkbox" id="Engineer" name="depart" value="Engineer" ${Engcheck}><label for="Engineer">Engineer</label>
                            <input type="checkbox" id="Others" name="depart" value="Others"${othercheck}><label for="Others">Others</label>
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