/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWorkspace = /* GraphQL */ `
  mutation CreateWorkspace(
    $input: CreateWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    createWorkspace(input: $input, condition: $condition) {
      id
      title
      description
      userID
      createdBy {
        id
        email
        firstName
        lastName
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamMembers {
        items {
          id
          workspaceID
          teamMemberID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkspace = /* GraphQL */ `
  mutation UpdateWorkspace(
    $input: UpdateWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    updateWorkspace(input: $input, condition: $condition) {
      id
      title
      description
      userID
      createdBy {
        id
        email
        firstName
        lastName
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamMembers {
        items {
          id
          workspaceID
          teamMemberID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkspace = /* GraphQL */ `
  mutation DeleteWorkspace(
    $input: DeleteWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    deleteWorkspace(input: $input, condition: $condition) {
      id
      title
      description
      userID
      createdBy {
        id
        email
        firstName
        lastName
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamMembers {
        items {
          id
          workspaceID
          teamMemberID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createWorkspaceMember = /* GraphQL */ `
  mutation CreateWorkspaceMember(
    $input: CreateWorkspaceMemberInput!
    $condition: ModelWorkspaceMemberConditionInput
  ) {
    createWorkspaceMember(input: $input, condition: $condition) {
      id
      workspaceID
      workspace {
        id
        title
        description
        userID
        createdBy {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
        }
        teamMembers {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateWorkspaceMember = /* GraphQL */ `
  mutation UpdateWorkspaceMember(
    $input: UpdateWorkspaceMemberInput!
    $condition: ModelWorkspaceMemberConditionInput
  ) {
    updateWorkspaceMember(input: $input, condition: $condition) {
      id
      workspaceID
      workspace {
        id
        title
        description
        userID
        createdBy {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
        }
        teamMembers {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteWorkspaceMember = /* GraphQL */ `
  mutation DeleteWorkspaceMember(
    $input: DeleteWorkspaceMemberInput!
    $condition: ModelWorkspaceMemberConditionInput
  ) {
    deleteWorkspaceMember(input: $input, condition: $condition) {
      id
      workspaceID
      workspace {
        id
        title
        description
        userID
        createdBy {
          id
          email
          firstName
          lastName
          createdAt
          updatedAt
        }
        teamMembers {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      workspaces {
        items {
          id
          workspaceID
          teamMemberID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      workspaces {
        items {
          id
          workspaceID
          teamMemberID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      workspaces {
        items {
          id
          workspaceID
          teamMemberID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
