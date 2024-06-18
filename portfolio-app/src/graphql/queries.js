import { gql } from "@apollo/client";

export const GET_ALL_SKILLS = gql`
  query GET_ALL_SKILLS {
    skills {
      name
      percent
    }
  }
`;

export const GET_ALL_SERVICES = gql`
  query GET_ALL_SERVICES {
    services {
      description
      title
      details
    }
  }
`;
