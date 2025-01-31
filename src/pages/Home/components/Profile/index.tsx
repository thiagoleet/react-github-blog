import { ArrowSquareOut } from "@phosphor-icons/react";
import { User } from "../../../../models/User";
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileDetails,
  ProfileDetailsContent,
  ProfileFooter,
  ProfileHeader,
} from "./styles";

interface ProfileProps {
  user: User | null;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img
          src={user?.avatar_url}
          alt={user?.name}
        />
      </ProfileAvatar>
      <ProfileDetailsContent>
        <ProfileHeader>
          <h1>{user?.name}</h1>
          <a
            href={user?.html_url}
            target="_blank"
          >
            <span>Github</span>
            <ArrowSquareOut />
          </a>
        </ProfileHeader>
        <ProfileDetails>
          <p>{user?.bio}</p>
        </ProfileDetails>
        <ProfileFooter></ProfileFooter>
      </ProfileDetailsContent>
    </ProfileContainer>
  );
}
