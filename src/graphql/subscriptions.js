/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = /* GraphQL */ `
  subscription OnCreateWorkspace {
    onCreateWorkspace {
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
export const onUpdateWorkspace = /* GraphQL */ `
  subscription OnUpdateWorkspace {
    onUpdateWorkspace {
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
export const onDeleteWorkspace = /* GraphQL */ `
  subscription OnDeleteWorkspace {
    onDeleteWorkspace {
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
export const onCreateWorkspaceMember = /* GraphQL */ `
  subscription OnCreateWorkspaceMember {
    onCreateWorkspaceMember {
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
export const onUpdateWorkspaceMember = /* GraphQL */ `
  subscription OnUpdateWorkspaceMember {
    onUpdateWorkspaceMember {
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
export const onDeleteWorkspaceMember = /* GraphQL */ `
  subscription OnDeleteWorkspaceMember {
    onDeleteWorkspaceMember {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
