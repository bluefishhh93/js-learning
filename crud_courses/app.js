
var courseApi = 'http://localhost:3000/courses';
function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

function renderCourses(courses){
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(course=>{
        return `<li class="course-item-${course.id}">
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                    <button onclick="handleUpdateCourse(${course.id},'${course.name}','${course.description}')">Update</button>
                </li>
        `;
    })
    listCoursesBlock.innerHTML = htmls.join('');
}

function getCourses(callback){
    fetch(courseApi)
        .then(Response => Response.json())
        .then(callback)
}

//create new course
function createCourse(data,callback ){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:  JSON.stringify(data),
    };
    fetch(courseApi, options)
        .then(Response => Response.json())
        .then(callback)

}
//delete a course
function handleDeleteCourse(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi +'/'+ id, options)
        .then(Response => Response.json())
        .then(function(){ //cho de hieu cua thang /then(callback)
           var courseItem = document.querySelector('.course-item-'+id).remove();
           if(courseItem){
                courseItem.remove(); //xoa thang thang doom de ko can goi lai api getCourses(renderCourses)
           }
        });

}

function handleUpdateCourse(id, name, description){

    var courseName = document.querySelector('input[name="name"]');
    var courseDescription = document.querySelector('input[name="description"]');
    courseName.value = name;
    courseDescription.value = description;
    var updateBtn = document.querySelector('#create');
    updateBtn.id = 'update';
    updateBtn.innerHTML = 'Update';
    updateBtn.onclick = function(){
        updateCourse(id, courseName.value, courseDescription.value);
    }
}

function updateCourse(id, name, description){
    var options ={
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: description
        })
    };
    fetch(courseApi +'/'+ id, options)
        .then(Response => Response.json())
        .then(function(){
            var createBtn = document.querySelector('#update');
            createBtn.id = 'create';
            createBtn.innerHTML = 'Create';          
            getCourses(renderCourses);
        })
}


function handleCreateForm(){
    var createBtn = document.querySelector('#create');
    createBtn.onclick = ()=>{
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, function(){
            getCourses(renderCourses);
        });
    }

}


