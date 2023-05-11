import { gql } from '@apollo/client';

export const CONNECT_MUTATION = gql`
  mutation ConnectToInstagram($jsonInput: String!) {
    connectToInstagram(json_input: $jsonInput) {
      message
      success
    }
  }
`;
