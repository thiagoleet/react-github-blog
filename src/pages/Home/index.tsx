import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import { HomeContainer } from "./styles";
import { User } from "../../models/User";
import { getUserDetails } from "../../services/get-user-details.service";

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await getUserDetails("thiagoleet");

      setUser(response);
    }

    fetchUser();
  });

  return (
    <HomeContainer>
      <Profile user={user} />
    </HomeContainer>
  );
}
