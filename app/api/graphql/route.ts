
const typeDefs = `
    type Todo {
        id: Int!
        content: String!
        isCompleted: Boolean!
        userId: Int
    }
    
    type Query {
        getTodos: [Todo]
    }

    type Mutation {
        addTodo(content: String!, userId: Int): Todo
    }`;


