import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 70px 0;
`;

export const Inner = styled.div`
  width: 94%;
  display: flex;
  margin: auto;
`;

export const Product = styled.div`
  display: flex;
  gap: 40px;
  width: 92%;
  @media (min-width: 2000px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const BigImage = styled.div`
  flex: 1;
  max-height: 660px;
  background: url(${({ src }) => src}) center / contain no-repeat;
`;

export const SmallImage = styled.div`
  width: 79px;
  height: 80px;
  background: url(${({ src }) => src}) center / cover no-repeat;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const DetailsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 25%;
`;

export const SizeText = styled.h5`
  font: normal 700 18px/18px Roboto Condensed, sans-serif;
`;

export const SmallImagesGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ContentHolder = styled.div`
  display: flex;
  gap: 100px;
  width: 100%;
`;

export const PriceText = styled(SizeText)``;

export const AddToCartBtn = styled.button`
  background-color: ${({ inStock }) => (inStock ? "#5ece7b" : "red")};
  color: white;
  padding: 16px 32px 16px 32px;
  border: 0;
  cursor: pointer;
  opacity: ${({ inStock }) => (inStock ? 1 : 0.5)};
  pointer-events: ${({ inStock }) => (inStock ? "all" : "none")};
`;

export const TextDesc = styled.div`
  font: normal 400 16px/25.59px Roboto, sans-serif;
`;

export const ColorBox = styled.div`
  width: 63px;
  height: 45px;
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid black;
  opacity: ${({ active }) => (active ? "1" : "0.4")};
  cursor: pointer;
`;
