<template>
    <div>
        <h1>Admin Page</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <button @click="deleteUser(user.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                { id: 1, name: 'User 1', email: 'user1@example.com' },
                { id: 2, name: 'User 2', email: 'user2@example.com' },
                { id: 3, name: 'User 3', email: 'user3@example.com' },
                // Agrega más usuarios aquí
            ],
        };
    },
    methods: {
        deleteUser(userId) {
            this.users = this.users.filter(user => user.id !== userId);
        },
    },
};
</script>