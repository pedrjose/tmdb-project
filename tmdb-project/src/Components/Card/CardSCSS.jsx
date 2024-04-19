import styled from "styled-components";

export const CardStyled = styled.div`
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #242021;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 8px;
  gap: 0.5rem;
  width: 15rem;
  transition: all 0.5s;
  cursor: pointer;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;

  img {
    height: 20rem;
    border-radius: 5px;
    object-fit: cover;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  img:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    opacity: 0.5;
  }

  h6 {
    margin-top: 0.5rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }

  button {
    display: inline-block;
    outline: 0;
    cursor: pointer;
    border-radius: 8px;
    background: #242021;
    border: 1px solid #d5d9d9;
    font-size: 13px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: bolder;
    height: 31px;
    padding: 0 11px;
    text-align: center;
    font-weight: 400;
    color: #eee6cf;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-bottom: 0.5rem;
  }

  button:hover {
    background-color: #f7fafa;
    border-color: #d5d9d9;
    color: #242021;
  }

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    background-color: #242021;
    color: #eee6cf;
  }
`;
