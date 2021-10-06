/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkspace = /* GraphQL */ `
  query GetWorkspace($id: ID!) {
    getWorkspace(id: $id) {
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
export const listWorkspaces = /* GraphQL */ `
  query ListWorkspaces(
    $filter: ModelWorkspaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        attachments {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        commentedOnID
        attachmentID
        replies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
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
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        url
        taskID
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
