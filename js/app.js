const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (event) => {
    const userText = event.target.value;
    if(userText !== '') {
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                ui.showAlert('User not found!', 'alert alert-danger')
            } else {
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            console.log(data);
        })
    } else {
        ui.clearProfile();
    }
})
