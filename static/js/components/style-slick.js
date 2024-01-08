import styled from 'styled-components';

const SlickWrapper = styled.div`
  .slick-arrow {
    background: red;
  }
  width: 100%;
  padding-left: 50px;

  .slick-dots li {
    padding: 10px 0;
    width: 70px;
  }

  li.slick-active div {
    background: #ffb800;
  }
`;
export default SlickWrapper;
