import users from './users.json';
import repairs from './repairs.json';

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
                localStorage.setItem("repairHistory", JSON.stringify(repairs[user.id].repair));
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

export function tempRepair(formData){
    console.log(formData);
    
    localStorage.setItem("tempRepair", JSON.stringify(formData));
}

export function isTempRepair(){
    return localStorage.getItem("tempRepair") ? true : false;
}

export function removeTempRepair(){
    localStorage.removeItem('tempRepair');
}

export function saveRepair(){
    let repairHistory = []
    
    const tempRepair = JSON.parse(localStorage.getItem("tempRepair"));

    console.log(tempRepair);

    const user = JSON.parse(localStorage.getItem("userToken"));

    console.log(repairs[user.id]);

    if(localStorage.getItem("repairHistory"))
        repairHistory = JSON.parse(localStorage.getItem("repairHistory"));  
    else 
        repairHistory = repairs[user.id].repair;

    console.log(repairHistory);

    repairHistory.push(tempRepair);

    console.log(repairHistory);

    localStorage.setItem("repairHistory", JSON.stringify(repairHistory));

    removeTempRepair();

}