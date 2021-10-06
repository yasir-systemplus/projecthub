/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = /* GraphQL */ `
  subscription OnCreateWorkspace {
    onCreateWorkspace {
      id
      title
      description
      managerID
      manager {
        id
        email
        firstName
        lastName
        userType
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
      managerID
      manager {
        id
        email
        firstName
        lastName
        userType
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
      managerID
      manager {
        id
        email
        firstName
        lastName
        userType
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
        managerID
        manager {
          id
          email
          firstName
          lastName
          userType
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
        userType
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
        managerID
        manager {
          id
          email
          firstName
          lastName
          userType
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
        userType
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
        managerID
        manager {
          id
          email
          firstName
          lastName
          userType
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
        userType
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
      userType
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
      userType
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
      userType
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      priority
      description
      taskStatus
      creatorID
      creator {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      assigneeID
      assignee {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      attachments {
        items {
          id
          type
          url
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      priority
      description
      taskStatus
      creatorID
      creator {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      assigneeID
      assignee {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      attachments {
        items {
          id
          type
          url
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      priority
      description
      taskStatus
      creatorID
      creator {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      assigneeID
      assignee {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      attachments {
        items {
          id
          type
          url
          taskID
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      description
      taskID
      commentatorID
      commentator {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      commentedOnID
      attachmentID
      replies {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      description
      taskID
      commentatorID
      commentator {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      commentedOnID
      attachmentID
      replies {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      description
      taskID
      commentatorID
      commentator {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        createdAt
        updatedAt
      }
      commentedOnID
      attachmentID
      replies {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment {
    onCreateAttachment {
      id
      type
      url
      taskID
      comments {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment {
    onUpdateAttachment {
      id
      type
      url
      taskID
      comments {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment {
    onDeleteAttachment {
      id
      type
      url
      taskID
      comments {
        items {
          id
          description
          taskID
          commentatorID
          commentedOnID
          attachmentID
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
