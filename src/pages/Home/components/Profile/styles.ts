import styled from "styled-components";

export const ProfileContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.profile};
  padding: 2rem 3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const ProfileAvatar = styled.div`
  width: 9.25rem;
  height: 9.25rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

export const ProfileDetailsContent = styled.div`
  flex: 1;
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;

  h1 {
    color: ${({ theme }) => theme.colors.title};
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    font-size: 1.125rem;
    text-transform: uppercase;
    display: flex;
    gap: 0.5rem;
  }
`;

export const ProfileFooter = styled.footer``;

export const ProfileDetails = styled.div`
  padding-bottom: 1rem;

  p {
    color: ${({ theme }) => theme.colors.text};
  }
`;
