import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";
import { Wrapper, Container } from "./Welcome.styled";

const Welcome = () => (
  <Wrapper className="gradient-bg-welcome">
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  </Wrapper>
);

export default Welcome;
