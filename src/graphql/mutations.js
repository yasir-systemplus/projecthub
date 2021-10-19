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
      managerID
      manager {
        id
        email
        firstName
        lastName
        userType
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const updateWorkspace = /* GraphQL */ `
  mutation UpdateWorkspace(
    $input: UpdateWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    updateWorkspace(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const deleteWorkspace = /* GraphQL */ `
  mutation DeleteWorkspace(
    $input: DeleteWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    deleteWorkspace(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
        managerID
        manager {
          id
          email
          firstName
          lastName
          userType
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        userType
        emailVerfied
        phoneNumber
        phoneNumberVerified
        workspaces {
          nextToken
        }
        projects {
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
        managerID
        manager {
          id
          email
          firstName
          lastName
          userType
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        userType
        emailVerfied
        phoneNumber
        phoneNumberVerified
        workspaces {
          nextToken
        }
        projects {
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
        managerID
        manager {
          id
          email
          firstName
          lastName
          userType
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        userType
        emailVerfied
        phoneNumber
        phoneNumberVerified
        workspaces {
          nextToken
        }
        projects {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
        emailVerfied
        phoneNumber
        phoneNumberVerified
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
      userType
      emailVerfied
      phoneNumber
      phoneNumberVerified
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
      userType
      emailVerfied
      phoneNumber
      phoneNumberVerified
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
      userType
      emailVerfied
      phoneNumber
      phoneNumberVerified
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
export const createProjectMember = /* GraphQL */ `
  mutation CreateProjectMember(
    $input: CreateProjectMemberInput!
    $condition: ModelProjectMemberConditionInput
  ) {
    createProjectMember(input: $input, condition: $condition) {
      id
      projectID
      project {
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
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        userType
        emailVerfied
        phoneNumber
        phoneNumberVerified
        workspaces {
          nextToken
        }
        projects {
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
export const updateProjectMember = /* GraphQL */ `
  mutation UpdateProjectMember(
    $input: UpdateProjectMemberInput!
    $condition: ModelProjectMemberConditionInput
  ) {
    updateProjectMember(input: $input, condition: $condition) {
      id
      projectID
      project {
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
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        userType
        emailVerfied
        phoneNumber
        phoneNumberVerified
        workspaces {
          nextToken
        }
        projects {
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
export const deleteProjectMember = /* GraphQL */ `
  mutation DeleteProjectMember(
    $input: DeleteProjectMemberInput!
    $condition: ModelProjectMemberConditionInput
  ) {
    deleteProjectMember(input: $input, condition: $condition) {
      id
      projectID
      project {
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
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
          emailVerfied
          phoneNumber
          phoneNumberVerified
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
      teamMemberID
      teamMember {
        id
        email
        firstName
        lastName
        userType
        emailVerfied
        phoneNumber
        phoneNumberVerified
        workspaces {
          nextToken
        }
        projects {
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
