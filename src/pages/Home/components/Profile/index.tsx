import {
  ProfileAvatar,
  ProfileContainer,
  ProfileDetails,
  ProfileDetailsContent,
  ProfileFooter,
  ProfileHeader,
} from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar></ProfileAvatar>
      <ProfileDetailsContent>
        <ProfileHeader>
          <h1>Name Surname</h1>
          <a href="#">Github</a>
        </ProfileHeader>
        <ProfileDetails>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            deleniti rem error enim, sed delectus quasi voluptatum consectetur
            nam obcaecati magni reiciendis ex animi, libero, impedit sunt
            corporis commodi perspiciatis.
          </p>
        </ProfileDetails>
        <ProfileFooter></ProfileFooter>
      </ProfileDetailsContent>
    </ProfileContainer>
  );
}
