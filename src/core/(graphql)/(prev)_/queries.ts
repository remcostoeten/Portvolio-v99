import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    viewer {
      repositories(first: 10) {
        nodes {
          name
          description
          url
          id
        }
      }
    }
  }
`;

const GET_COMMITS = gql`
  query GetCommits($login: String!) {
    user(login: $login) {
      repositories(first: 50, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 50) {
                  nodes {
                    messageHeadline
                    committedDate
                    author {
                      user {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_USER_DETAILS = gql`
    query GetUserDetails($login: String!) {
        user(login: $login) {
            id
            createdAt
            type
            followers {
                totalCount
            }
            repositories {
                totalCount
            }
            url
        }
    }
`;

export const GET_USER_REPOSITORIES = gql`
    query GetUserRepositories($login: String!, $first: Int!) {
        user(login: $login) {
            repositories(first: $first) {
                nodes {
                    id
                    name
                    createdAt
                    description
                    owner {
                        login
                    }
                    stargazerCount
                    forks {
                        totalCount
                    }
                    issues {
                        totalCount
                    }
                }
            }
        }
    }
`;
