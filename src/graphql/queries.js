/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWorkspace = /* GraphQL */ `
  query GetWorkspace($id: ID!) {
    getWorkspace(id: $id) {
      id
      title
      description
      image
      managerID
      manager {
        email
        emailVerfied
        firstName
        id
        lastName
        phoneNumber
        phoneNumberVerified
        userType
        profileURL
        workspacesBeingManaged {
          items {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          nextToken
        }
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
        projectsJoined {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
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
          workspace {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          teamLeadID
          teamLead {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
          tasks {
            nextToken
          }
          projectMembers {
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      teamMembers {
        items {
          id
          workspaceID
          workspace {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          teamMemberID
          teamMember {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
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
        image
        managerID
        manager {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      email
      emailVerfied
      firstName
      id
      lastName
      phoneNumber
      phoneNumberVerified
      userType
      profileURL
      workspacesBeingManaged {
        items {
          id
          title
          description
          image
          managerID
          manager {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
      workspaces {
        items {
          id
          workspaceID
          workspace {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          teamMemberID
          teamMember {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      projectsJoined {
        items {
          id
          projectID
          project {
            id
            title
            description
            workspaceID
            teamLeadID
            createdAt
            updatedAt
          }
          userID
          user {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
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
        email
        emailVerfied
        firstName
        id
        lastName
        phoneNumber
        phoneNumberVerified
        userType
        profileURL
        workspacesBeingManaged {
          items {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          nextToken
        }
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
        projectsJoined {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
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
      workspace {
        id
        title
        description
        image
        managerID
        manager {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
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
      teamLeadID
      teamLead {
        email
        emailVerfied
        firstName
        id
        lastName
        phoneNumber
        phoneNumberVerified
        userType
        profileURL
        workspacesBeingManaged {
          items {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          nextToken
        }
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
        projectsJoined {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
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
          deadLine
          projectID
          project {
            id
            title
            description
            workspaceID
            teamLeadID
            createdAt
            updatedAt
          }
          creatorID
          creator {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
          assigneeID
          assignee {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
      projectMembers {
        items {
          id
          projectID
          project {
            id
            title
            description
            workspaceID
            teamLeadID
            createdAt
            updatedAt
          }
          userID
          user {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
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
        workspace {
          id
          title
          description
          image
          managerID
          manager {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
        teamLeadID
        teamLead {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
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
            deadLine
            projectID
            creatorID
            assigneeID
            createdAt
            updatedAt
          }
          nextToken
        }
        projectMembers {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
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
      deadLine
      projectID
      project {
        id
        title
        description
        workspaceID
        workspace {
          id
          title
          description
          image
          managerID
          manager {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
        teamLeadID
        teamLead {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
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
            deadLine
            projectID
            creatorID
            assigneeID
            createdAt
            updatedAt
          }
          nextToken
        }
        projectMembers {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      creatorID
      creator {
        email
        emailVerfied
        firstName
        id
        lastName
        phoneNumber
        phoneNumberVerified
        userType
        profileURL
        workspacesBeingManaged {
          items {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          nextToken
        }
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
        projectsJoined {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      assigneeID
      assignee {
        email
        emailVerfied
        firstName
        id
        lastName
        phoneNumber
        phoneNumberVerified
        userType
        profileURL
        workspacesBeingManaged {
          items {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          nextToken
        }
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
        projectsJoined {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      attachments {
        items {
          id
          url
          taskID
          task {
            id
            title
            priority
            description
            taskStatus
            deadLine
            projectID
            creatorID
            assigneeID
            createdAt
            updatedAt
          }
          comments {
            nextToken
          }
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
          commentator {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
        deadLine
        projectID
        project {
          id
          title
          description
          workspaceID
          workspace {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          teamLeadID
          teamLead {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
          tasks {
            nextToken
          }
          projectMembers {
            nextToken
          }
          createdAt
          updatedAt
        }
        creatorID
        creator {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
            nextToken
          }
          createdAt
          updatedAt
        }
        assigneeID
        assignee {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
            nextToken
          }
          createdAt
          updatedAt
        }
        attachments {
          items {
            id
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
        email
        emailVerfied
        firstName
        id
        lastName
        phoneNumber
        phoneNumberVerified
        userType
        profileURL
        workspacesBeingManaged {
          items {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          nextToken
        }
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
        projectsJoined {
          items {
            id
            projectID
            userID
            createdAt
            updatedAt
          }
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
          commentator {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
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
      nextToken
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      url
      taskID
      task {
        id
        title
        priority
        description
        taskStatus
        deadLine
        projectID
        project {
          id
          title
          description
          workspaceID
          workspace {
            id
            title
            description
            image
            managerID
            createdAt
            updatedAt
          }
          teamLeadID
          teamLead {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
          tasks {
            nextToken
          }
          projectMembers {
            nextToken
          }
          createdAt
          updatedAt
        }
        creatorID
        creator {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
            nextToken
          }
          createdAt
          updatedAt
        }
        assigneeID
        assignee {
          email
          emailVerfied
          firstName
          id
          lastName
          phoneNumber
          phoneNumberVerified
          userType
          profileURL
          workspacesBeingManaged {
            nextToken
          }
          workspaces {
            nextToken
          }
          projectsJoined {
            nextToken
          }
          createdAt
          updatedAt
        }
        attachments {
          items {
            id
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
      comments {
        items {
          id
          description
          taskID
          commentatorID
          commentator {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
        url
        taskID
        task {
          id
          title
          priority
          description
          taskStatus
          deadLine
          projectID
          project {
            id
            title
            description
            workspaceID
            teamLeadID
            createdAt
            updatedAt
          }
          creatorID
          creator {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
            createdAt
            updatedAt
          }
          assigneeID
          assignee {
            email
            emailVerfied
            firstName
            id
            lastName
            phoneNumber
            phoneNumberVerified
            userType
            profileURL
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
      nextToken
    }
  }
`;
