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
export const updateWorkspace = /* GraphQL */ `
  mutation UpdateWorkspace(
    $input: UpdateWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    updateWorkspace(input: $input, condition: $condition) {
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
export const deleteWorkspace = /* GraphQL */ `
  mutation DeleteWorkspace(
    $input: DeleteWorkspaceInput!
    $condition: ModelWorkspaceConditionInput
  ) {
    deleteWorkspace(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
