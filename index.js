const delay = (ms) => {
    return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
};

const logger = (time) => console.log(`Resolved after ${time}ms`);


delay(2000).then(logger); 
delay(1000).then(logger); 
delay(1500).then(logger); 




const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) => {
        if (user.name === userName) {
            return { ...user, active: !user.active };
        }
        return user;
    });
    resolve(updatedUsers);
});
};

const loger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(loger);
toggleUserState(users, "Lux").then(loger);