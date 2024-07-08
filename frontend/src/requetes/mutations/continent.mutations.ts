import { gql } from "@apollo/client";

export const ADD_CONTINENT = gql`
  mutation Mutation($data: NewContinentInput!) {
    addContinent(data: $data) {
      id
      name
    }
  }
`;
