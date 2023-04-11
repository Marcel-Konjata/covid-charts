import { FC, PropsWithChildren } from "react";
import { Layout } from "antd";
import styled from "@emotion/styled";
import { ContentWrapper } from "@/features/layout/ContentWrapper";

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const StyledHeader = styled(Layout.Header)`
  background-color: #fff;
  box-shadow: 0px 5px 7px 0px rgb(181, 181, 181);
  position: relative;
  z-index: 2;
  color: #171717;
`;

const MainContentWrapper = styled(ContentWrapper)`
  height: 100%;
`;

const StyledLayout = styled(Layout)`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const StyledContent = styled(Layout.Content)`
  background-color: #f3eeee;
`;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <ContentWrapper>
          <Text>App title</Text>
        </ContentWrapper>
      </StyledHeader>

      <StyledContent>
        <MainContentWrapper>{children}</MainContentWrapper>
      </StyledContent>
      <Layout.Footer></Layout.Footer>
    </StyledLayout>
  );
};
