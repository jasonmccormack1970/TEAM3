import gql from 'graphql-tag';

// Remeber to wrap queries in back ticks ``

const getUsersQuery = gql`
    query UserQuery {
        Users {
            fullName
            email
            department
            role
            id
            active
            apikey
        }
    }
`;

const getDeptQuery = gql`
    query GetDeptQuery {
        Depts {
            department
        }
    }
`;

const getRoleQuery = gql`
    query GetRoleQuery {
        Roles {
            role
        }
    }
`;

const addNewUserMutation = gql`
    mutation(
        $first_name: String
        $last_name: String
        $department: String
        $role: String
        $email: String!
        $apikey: String
    ) {
        addNewUser(
            first_name: $first_name
            last_name: $last_name
            department: $department
            role: $role
            email: $email
            apikey: $apikey
        ) {
            fullName
        }
    }
`;

export { getUsersQuery, getDeptQuery, addNewUserMutation, getRoleQuery };
