import users from './users.json';

export function handleLogin(formData){
    console.log(formData);

    let loginStatus = false;

    users.forEach(user =>{
        console.log(user);
        if(user.username === formData.username)
            if(user.password === formData.password)
            {
                localStorage.setItem("userToken", JSON.stringify(user));
                localStorage.setItem("username", user.username);
                loginStatus = true;
            }
    });

    return loginStatus;
}

export function isAuth(){
    return localStorage.getItem("userToken") ? true : false;
}

export function logout(){
    localStorage.clear();
}