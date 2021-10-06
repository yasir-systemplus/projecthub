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
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      projects {
        items {
          id
          title
          description
          workspaceID
          managerID
          teamLeadID
          createdAt
          updatedAt
        }
        nextToken
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
        projects {
          nextToken
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
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      priority
      description
      taskStatus
      projectID
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
        projects {
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
        projects {
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
        projectID
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
        projects {
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
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      title
      description
      workspaceID
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
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      teamLeadID
      teamLead {
        id
        email
        firstName
        lastName
        userType
        workspaces {
          nextToken
        }
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      tasks {
        items {
          id
          title
          priority
          description
          taskStatus
          projectID
          creatorID
          assigneeID
          createdAt
          updatedAt
        }
        nextToken
      }
      teamMembers {
        items {
          id
          projectID
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        workspaceID
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
        teamLeadID
        teamLead {
          id
          email
          firstName
          lastName
          userType
          createdAt
          updatedAt
        }
        tasks {
          nextToken
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
      projects {
        items {
          id
          projectID
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
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
