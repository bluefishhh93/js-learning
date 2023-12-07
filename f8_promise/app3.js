var users = [
    {
        id : 1,
        name : 'thanh',
    },
    {
        id : 2,
        name : 'nha',
    },
    {
        id : 3,
        name : 'chau',
    }
]

var comments = [
    {
        id : 1,
        user_id : 1,
        content: 'ban ten gi?'
    },
    {
        id : 2,
        user_id : 2,
        content: 'ten nha'
    },
    {
        id : 3,
        user_id : 1,
        content: 'aye'
    }
];

//1. lay comments
//2. tu comments lay ra user_id
//3. tu user_id lay ra user tuong ung

//fake api
function getComments(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(comments);
        },1000);
    });
};

function getUserByIds(userIds){
    return new Promise((resolve,reject)=>{
        var result = users.filter((user)=>{
            return userIds.includes(user.id); //loc ra nhung ai co trong cai list
        });
        setTimeout(()=>{
            resolve(result);
        },1000);
    });
}
// getUserByIds([1,2])
//     .then((users)=>{
//         console.log(users);
//     });
getComments()
    .then((comments)=>{
        var userId = comments.map((comment)=>{
            return comment.user_id;
        });

        return getUserByIds(userId)
            .then((users)=>{
                return {
                    users : users,
                    comments : comments,
                };
            });
    })
    .then((data)=>{
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach((comment)=>{
            var user  = data.users.find((user)=>{
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    });