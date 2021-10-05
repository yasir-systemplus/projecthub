/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkspace = /* GraphQL */ `
  query GetWorkspace($id: ID!) {
    getWorkspace(id: $id) {
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
