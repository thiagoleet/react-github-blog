import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { LayoutCountainer, PageContainer } from "./styles";

export default function DefaultLayout() {
  return (
    <LayoutCountainer>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </LayoutCountainer>
  );
}
