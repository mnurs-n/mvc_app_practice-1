let users = [
    { id: "1", username: 'Ulbi TV', age: 23 }
]
// Бизнес логика для работы с пользователями
module.exports = {
    // 1. 
    create: ({ username, age}) => {
        const newUser = {
            username,
            age,
            id: String(Date.now())
        }

        if(!users.fing(user => user.username === users)) {
            users.push(newUser)
        } else {
            throw new Error("Пользователь уже существует")
        }
        
        return newUser;
    },
    removeById: ({ id }) => {},
    // 3. 
    removeByUsername: ({ id }) => {},
    // 4. Возвращаем весь массив users
    getAll: () => {
        return users;
    },
    // 5. Проходимся по массиву и с .find ищем пользовтеля по id, далее возвращаем это значение 
    getById: ({ id }) => {
        return users.find(user => user.id === id);
    },
}