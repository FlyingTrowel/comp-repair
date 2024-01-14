import usersdb from './users.json';
import repairs from './repairs.json';
import cart from './cart.json';
import history from './history.json';

export function handleLogin(formData){
    console.log(formData);

    let loginStatus = false;

    const tempCart = JSON.parse(localStorage.getItem("tempCart"));

    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : usersdb

    users.forEach(user =>{
        console.log(user);
        if(user.username === formData.username)
            if(user.password === formData.password)
            {
                if (!cart[user.id]?.cart.includes(tempCart)) {
                    const a = tempCart ? cart[user.id].cart.push(...tempCart) : null;
                }
                const cartT = cart[user.id] ? JSON.stringify(cart[user.id]?.cart) : JSON.stringify([]);
                const repairHistoryT = repairs[user.id] ? JSON.stringify(repairs[user.id]?.repair) : JSON.stringify([]);
                const historyT = history[user.id] ? JSON.stringify(history[user.id]?.history) : JSON.stringify([]);

                localStorage.setItem("userToken", JSON.stringify(user));
                localStorage.setItem("username", user.username);
                localStorage.setItem("repairHistory", repairHistoryT);
                localStorage.setItem("cart", cartT);
                localStorage.setItem("history", historyT);
                loginStatus = true;
                localStorage.removeItem('tempCart');
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

export function addToCart(id){
    console.log(id);
    id = Number(id); 
    if(isAuth()){
        const a = JSON.parse(localStorage.getItem("cart"));
        
        if (!a?.includes(id)) {
            a?.push(id);
        }

        localStorage.setItem("cart", JSON.stringify(a));
    }else{
        
        const a = JSON.parse(localStorage.getItem("tempCart")) ? JSON.parse(localStorage.getItem("tempCart")) : [id];

        console.log(a);

        if (!a?.includes(id)) {
            a?.push(id);
        }

        console.log(a);
        localStorage.setItem("tempCart", JSON.stringify(a));
    }
}

export function createAccount(formData){

    console.log(formData);

    const lastIndex = usersdb.length -1; 

    const users = usersdb;
    const repairsT = repairs;
    const cartT = cart;
    const historyT = history;


    users.push({id: lastIndex+1, ...formData});

    localStorage.setItem("users", JSON.stringify(users));

}