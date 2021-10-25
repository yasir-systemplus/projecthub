/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWorkspace = /* GraphQL */ `
  subscription OnCreateWorkspace {
    onCreateWorkspace {
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
export const onUpdateWorkspace = /* GraphQL */ `
  subscription OnUpdateWorkspace {
    onUpdateWorkspace {
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
export const onDeleteWorkspace = /* GraphQL */ `
  subscription OnDeleteWorkspace {
    onDeleteWorkspace {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProjectMember = /* GraphQL */ `
  subscription OnCreateProjectMember {
    onCreateProjectMember {
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
export const onUpdateProjectMember = /* GraphQL */ `
  subscription OnUpdateProjectMember {
    onUpdateProjectMember {
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
export const onDeleteProjectMember = /* GraphQL */ `
  subscription OnDeleteProjectMember {
    onDeleteProjectMember {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
export const onCreateWorkspaceMember = /* GraphQL */ `
  subscription OnCreateWorkspaceMember {
    onCreateWorkspaceMember {
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
export const onUpdateWorkspaceMember = /* GraphQL */ `
  subscription OnUpdateWorkspaceMember {
    onUpdateWorkspaceMember {
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
export const onDeleteWorkspaceMember = /* GraphQL */ `
  subscription OnDeleteWorkspaceMember {
    onDeleteWorkspaceMember {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment {
    onCreateAttachment {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment {
    onUpdateAttachment {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment {
    onDeleteAttachment {
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
